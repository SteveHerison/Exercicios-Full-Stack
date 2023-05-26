const nomes = [
  "Maria",
  "João",
  "José",
  "Antonio",
  "Beatriz",
  "Camila",
  "amanda",
];

const frutasComA = nomes.filter((nomes) => {
  return nomes.charAt(0).toLowerCase() === "a";
});

console.log(frutasComA);
