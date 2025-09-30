import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBookById } from "../services/bookService";
import Loading from "./Loading";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Chip,
  Divider,
  Paper,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CategoryIcon from "@mui/icons-material/Category";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import BookIcon from "@mui/icons-material/Book";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

// Função para limpar tags HTML indesejadas e corrigir tags quebradas
function sanitizeDescription(description) {
  if (!description) return "Descrição não disponível.";
  // Remove scripts, styles e tags problemáticas, mas mantém formatação básica
  let clean = description
    .replace(/<\s*script.*?>.*?<\s*\/\s*script>/gi, "")
    .replace(/<\s*style.*?>.*?<\s*\/\s*style>/gi, "")
    .replace(
      /<(\/)?(h[1-6]|span|font|img|iframe|input|button|form|meta|link|object|embed)[^>]*>/gi,
      ""
    )
    .replace(/<(br\s*\/?)>/gi, "<br/>") // corrige quebras
    .replace(/\n/g, "<br/>"); // preserva quebras de linha simples
  return clean;
}

function BookDetail() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!bookId) return;
    setLoading(true);
    fetchBookById(bookId)
      .then((data) => setBook(data))
      .catch(() => setError("Erro ao carregar detalhes do livro."))
      .finally(() => setLoading(false));
  }, [bookId]);

  if (loading) return <Loading />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!book) return <Typography>Livro não encontrado.</Typography>;

  const info = book.volumeInfo;

  const categorias = info.categories || [];
  const autores = info.authors || [];
  const descricao = sanitizeDescription(info.description);

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 4 }}>
      <Paper elevation={4} sx={{ p: { xs: 2, md: 4 }, borderRadius: 4 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box sx={{ flex: "0 0 200px", alignSelf: "center" }}>
            <CardMedia
              component="img"
              image={
                info.imageLinks?.thumbnail ||
                "https://via.placeholder.com/180x260?text=Sem+Capa"
              }
              alt={info.title}
              sx={{
                width: 200,
                height: 280,
                objectFit: "cover",
                borderRadius: 3,
                boxShadow: 4,
                background: "#fafafa",
              }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, mb: 1, color: "primary.main" }}
            >
              {info.title || "Título não disponível"}
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <BookIcon color="primary" />
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {info.subtitle}
              </Typography>
            </Stack>
            <Divider sx={{ mb: 2 }} />
            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
              {autores.map((autor) => (
                <Chip
                  key={autor}
                  icon={<PersonIcon />}
                  label={autor}
                  color="info"
                  variant="outlined"
                  sx={{ mb: 1 }}
                />
              ))}
              {autores.length === 0 && (
                <Chip
                  label="Autor desconhecido"
                  color="info"
                  variant="outlined"
                />
              )}
            </Stack>
            <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
              {categorias.map((cat) => (
                <Chip
                  key={cat}
                  icon={<CategoryIcon />}
                  label={cat}
                  color="secondary"
                  variant="filled"
                  sx={{ mb: 1 }}
                />
              ))}
            </Stack>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Chip
                icon={<BusinessIcon />}
                label={info.publisher || "Editora desconhecida"}
                color="default"
                variant="outlined"
              />
              <Chip
                icon={<CalendarMonthIcon />}
                label={info.publishedDate || "Ano desconhecido"}
                color="default"
                variant="outlined"
              />
            </Stack>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body1"
                sx={{ mb: 1, mt: 2, color: "text.primary" }}
                component="div"
              >
                <strong>Descrição:</strong>
                <div
                  style={{ marginTop: 8, lineHeight: 1.7, color: "#555" }}
                  dangerouslySetInnerHTML={{ __html: descricao }}
                />
              </Typography>
            </Box>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Button
                variant="contained"
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate(-1)}
                color="primary"
                sx={{ minWidth: 120, fontWeight: 600 }}
              >
                Voltar
              </Button>
              {info.infoLink && (
                <Button
                  variant="outlined"
                  color="secondary"
                  endIcon={<OpenInNewIcon />}
                  href={info.infoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ minWidth: 140, fontWeight: 600 }}
                >
                  Ver na Google Books
                </Button>
              )}
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}

export default BookDetail;
