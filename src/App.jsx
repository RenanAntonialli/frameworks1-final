import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Library from "./components/Library";
import BookDetail from "./components/BookDetail";
import Header from "./components/Header";
import { CssBaseline, Container } from "@mui/material";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library/:libraryId" element={<Library />} />
          <Route path="/book/:bookId" element={<BookDetail />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;