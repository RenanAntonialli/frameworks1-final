# Biblioteca Virtual (React JavaScript)

Um aplicativo web de biblioteca virtual desenvolvido em React (JavaScript) que permite ao usuário navegar, buscar e visualizar detalhes de livros utilizando a [Google Books API](https://developers.google.com/books/).

Você pode explorar obras por categorias, buscar qualquer livro e visualizar informações detalhadas de cada item.

## Integrantes

Natália Aparecida Fonseca, Renan Antonialli, Yulla Avelar Assis Mendonça

## Funcionalidades

- Navegação por categorias (Ficção, Não Ficção, Ciência)
- Busca de livros com paginação
- Visualização detalhada de livros (autor, descrição, editora, capa)
- Interface responsiva e design moderno

## Demonstração

CODESANDBOX: https://codesandbox.io/p/sandbox/y9my8c
VERCEL: 

## Como executar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v16 ou superior recomendado)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/RenanAntonialli/frameworks1-final.git
   cd frameworks1-final
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm start
   # ou
   yarn start
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o app.

## Estrutura do Projeto

```
src/
  App.jsx
  index.js
  components/
    BookCard.jsx
    BookDetail.jsx
    Header.jsx
    Home.jsx
    Library.jsx
    Loading.jsx
  services/
    bookService.js
  styles/
    App.css
    BookCard.css
    BookDetail.css
    Header.css
    Home.css
    Library.css
    Loading.css
public/
  index.html
```

## Como usar

- Escolha uma categoria na página inicial para explorar livros.
- Utilize o campo de busca para procurar títulos ou autores.
- Clique em um livro para ver informações detalhadas.
- Use os botões de navegação para avançar ou voltar entre páginas de resultados.

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Google Books API](https://developers.google.com/books/)

## Personalização

- É possível adicionar mais categorias editando o array `libraries` em `src/components/Home.jsx`.
- A estilização é feita através dos arquivos CSS localizados em `src/styles/`.

## Licença

Este projeto é open source e está disponível sob a licença [MIT](LICENSE).
