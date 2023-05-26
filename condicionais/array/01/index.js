const livros = [
  "Guerra e Paz",
  "A Montanha Mágica",
  "Cem Anos de Solidão",
  "Dom Quixote",
  "A Divina Comédia",
];
const nomeDoLivro = "Dom Quixote";

const livrosFiltrados = livros.findIndex((livro) => {
  return livro.includes(nomeDoLivro);
});

console.log(`O livro está na posição ${livrosFiltrados + 1}`);
