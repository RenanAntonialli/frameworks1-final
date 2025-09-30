import React from "react";
import { Link } from "react-router-dom";
import "../styles/BookCard.css";

function BookCard({ id, title, authors, description, thumbnail }) {
  return (
    <div className="book-card">
      {thumbnail && <img src={thumbnail} alt={title} />}
      <div className="book-info">
        <h3>{title}</h3>
        {authors && <p>Autores: {authors.join(", ")}</p>}
        {description && <p>{description.substring(0, 100)}...</p>}
        <Link to={`/book/${id}`}>Ver detalhes</Link>
      </div>
    </div>
  );
}

export default BookCard;