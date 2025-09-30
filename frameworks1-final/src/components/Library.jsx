import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBooks } from "../services/bookService";
import BookCard from "./BookCard";
import "../styles/Library.css";
import Loading from "./Loading";

const RESULTS_PER_PAGE = 10;

function Library() {
  const { libraryId } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  const libraryQueryMap = {
    "1": "fiction",
    "2": "nonfiction",
    "3": "science",
  };

  const query = search || libraryQueryMap[libraryId || "1"] || "books";

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

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <div className="library">
      <h2>Livros disponíveis:</h2>
      <input
        type="text"
        placeholder="Buscar livros..."
        value={search}
        onChange={handleSearchChange}
      />
      {books.length === 0 && <p>Nenhum livro encontrado.</p>}
      <div>
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
      </div>
      <div className="pagination">
        {page > 0 && (
          <button onClick={() => setPage(page - 1)}>Anterior</button>
        )}
        {books.length === RESULTS_PER_PAGE && (
          <button onClick={() => setPage(page + 1)}>Próxima</button>
        )}
      </div>
    </div>
  );
}

export default Library;