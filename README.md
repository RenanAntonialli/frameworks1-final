# Biblioteca Virtual (React JavaScript + Material-UI)

Um aplicativo web de biblioteca virtual desenvolvido em React (JavaScript) utilizando [Material-UI (MUI)](https://mui.com/) para uma interface profissional, responsiva e moderna. Permite explorar, buscar e visualizar detalhes de livros pela [Google Books API](https://developers.google.com/books/).

## Integrantes

- Renan Antonialli ([RenanAntonialli](https://github.com/RenanAntonialli))
- Natália Aparecida Fonseca
- Yulla Avelar Assis Mendonça

## Funcionalidades

- **Navegação por categorias:** Ficção, Não Ficção, Ciência
- **Busca dinâmica:** Resultados atualizados em tempo real enquanto você digita
- **Filtros combináveis:** Filtre por categoria e ano de publicação simultaneamente
- **Visualização detalhada de livros:** Título, autores, categorias, descrição (com formatação), editora, ano e link direto para o Google Books
- **Paginação de resultados**
- **Interface 100% baseada em Material-UI:** Visual limpo, responsivo e consistente

## Demonstração

*Adicione aqui o link para sua demo online (Vercel, Netlify, Codesandbox etc), se disponível.*

## Como executar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
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

3. **Instale o Material-UI**
   ```bash
   npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
   # ou
   yarn add @mui/material @mui/icons-material @emotion/react @emotion/styled
   ```

4. **Execute o servidor de desenvolvimento**
   ```bash
   npm start
   # ou
   yarn start
   ```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o app.

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
public/
  index.html
```

## Como usar

- Escolha uma categoria na página inicial para explorar livros.
- Utilize o campo de busca para procurar títulos, autores ou assuntos. Os resultados são atualizados em tempo real.
- Combine filtros de categoria e ano para refinar sua busca.
- Clique em um livro para ver informações detalhadas em uma página moderna e legível.
- Use os botões de navegação para avançar ou voltar entre páginas de resultados.

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Google Books API](https://developers.google.com/books/)
- [Material-UI (MUI)](https://mui.com/)

## Personalização

- Para adicionar mais categorias, edite o array `libraries` em `src/components/Home.jsx`.
- Toda a estilização é feita via Material-UI, facilitando customização de tema e design.

## Licença

Este projeto está disponível sob a licença [MIT](LICENSE).
