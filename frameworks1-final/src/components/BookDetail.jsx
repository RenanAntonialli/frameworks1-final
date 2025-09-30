import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBookById } from "../services/bookService";
import "../styles/BookDetail.css";
import Loading from "./Loading";

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
  if (error) return <p>{error}</p>;
  if (!book) return <p>Livro não encontrado.</p>;

  return (
    <div className="book-detail">
      <h2>{book.volumeInfo.title}</h2>
      {book.volumeInfo.imageLinks?.thumbnail && (
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
        />
      )}
      <p>{book.volumeInfo.description}</p>
      <p>Autores: {book.volumeInfo.authors?.join(", ")}</p>
      <p>Editora: {book.volumeInfo.publisher}</p>
      <p>Publicado em: {book.volumeInfo.publishedDate}</p>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
}

export default BookDetail;