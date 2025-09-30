import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { fetchBooks } from "../services/bookService";
import BookCard from "./BookCard";
import Loading from "./Loading";

import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Typography,
  Stack,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CategoryIcon from "@mui/icons-material/Category";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const RESULTS_PER_PAGE = 10;

const categories = [
  { value: "fiction", label: "Ficção" },
  { value: "nonfiction", label: "Não Ficção" },
  { value: "science", label: "Ciência" },
];

function Library() {
  const { libraryId } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(
    libraryId ? categories[+libraryId - 1]?.value : ""
  );
  const [date, setDate] = useState("");
  const [page, setPage] = useState(0);

  // Monta a query combinando busca, categoria e data
  const query = useMemo(() => {
    let q = search || "";
    if (category) q += (q ? " " : "") + "subject:" + category;
    if (date) q += (q ? " " : "") + `inpublisher:${date}`;
    return q || "books";
  }, [search, category, date]);

  useEffect(() => {
    setLoading(true);
    setError("");
    fetchBooks(query, page * RESULTS_PER_PAGE, RESULTS_PER_PAGE)
      .then((data) => setBooks(data))
      .catch(() => setError("Erro ao carregar livros."))
      .finally(() => setLoading(false));
  }, [query, page]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(0);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(0);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
    setPage(0);
  };

  if (loading) return <Loading />;
  if (error)
    return (
      <Typography color="error" align="center" sx={{ mt: 4 }}>
        {error}
      </Typography>
    );

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          textAlign: "center",
          color: "primary.main",
          fontWeight: 700,
        }}
      >
        Livros disponíveis
      </Typography>
      <Paper
        elevation={5}
        sx={{
          p: { xs: 2, md: 3 },
          mb: 4,
          borderRadius: 4,
          background: "rgba(255,255,255,0.92)",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            label="Buscar livros"
            variant="outlined"
            value={search}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <SearchIcon color="action" sx={{ mr: 1, opacity: 0.7 }} />
              ),
            }}
            sx={{ minWidth: 200 }}
          />
          <FormControl sx={{ minWidth: 160 }}>
            <InputLabel id="category-label">
              <CategoryIcon fontSize="small" sx={{ mr: 1, mb: "-3px" }} />
              Categoria
            </InputLabel>
            <Select
              labelId="category-label"
              value={category}
              label="Categoria"
              onChange={handleCategoryChange}
            >
              <MenuItem value="">Todas</MenuItem>
              {categories.map((cat) => (
                <MenuItem key={cat.value} value={cat.value}>
                  {cat.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Ano de publicação"
            variant="outlined"
            value={date}
            onChange={handleDateChange}
            type="number"
            InputProps={{
              startAdornment: (
                <CalendarMonthIcon
                  color="action"
                  sx={{ mr: 1, opacity: 0.7 }}
                />
              ),
              inputProps: { min: 0, max: 2100 },
            }}
            sx={{ minWidth: 140 }}
          />
        </Stack>
      </Paper>
      {books.length === 0 && (
        <Typography align="center" sx={{ mt: 4 }}>
          Nenhum livro encontrado.
        </Typography>
      )}
      <Box>
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            thumbnail={book.volumeInfo.imageLinks?.thumbnail}
          />
        ))}
      </Box>
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        {page > 0 && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setPage(page - 1)}
            sx={{ fontWeight: 600, minWidth: 120 }}
          >
            Anterior
          </Button>
        )}
        {books.length === RESULTS_PER_PAGE && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setPage(page + 1)}
            sx={{ fontWeight: 600, minWidth: 120 }}
          >
            Próxima
          </Button>
        )}
      </Stack>
    </Box>
  );
}

export default Library;
