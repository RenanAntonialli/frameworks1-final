import axios from "axios";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export const fetchBooks = async (
  query,
  startIndex = 0,
  maxResults = 10
) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        startIndex,
        maxResults,
      },
    });
    return response.data.items || [];
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    throw error;
  }
};

export const fetchBookById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar livro:", error);
    throw error;
  }
};