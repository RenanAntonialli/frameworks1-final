import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

import Home from "./components/Home";
import Library from "./components/Library";
import BookDetail from "./components/BookDetail";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library/:libraryId" element={<Library />} />
            <Route path="/book/:bookId" element={<BookDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;