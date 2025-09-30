import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="app-header">
      <h1>Minha Biblioteca Virtual</h1>
      <button className="home-btn" onClick={() => navigate("/")}>
        Home
      </button>
    </header>
  );
}

export default Header;