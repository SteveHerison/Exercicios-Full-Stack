const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

const cidade = cidades.filter((caracter) => caracter.length <= 8);
const reformado = cidade.join(",");

console.log(reformado);
