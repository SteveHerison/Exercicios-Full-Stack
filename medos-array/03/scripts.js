const nomes = [
  "Ford Ká",
  "Ranger",
  "Hilux",
  "Corola",
  "Fusca",
  "Chevete",
  "Brasilia",
];
const posicao = 3;

function separar(nomes, posicao) {
  console.log(nomes.slice(posicao, posicao + 3).join("-"));
}

separar(nomes, posicao);
