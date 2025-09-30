import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const libraries = [
    { id: 1, name: "Ficção", description: "Livros de ficção e fantasia" },
    {
      id: 2,
      name: "Não Ficção",
      description: "Livros de história e biografia",
    },
    { id: 3, name: "Ciência", description: "Livros de ciência e tecnologia" },
  ];

  return (
    <div className="home">
      <h2>Escolha uma categoria</h2>
      <div className="library-grid">
        {libraries.map((lib) => (
          <div key={lib.id} className="library-card">
            <h3>{lib.name}</h3>
            <p>{lib.description}</p>
            <Link to={`/library/${lib.id}`}>Ver livros</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;