const usuarios = [
  {
    nome: "João",
    pets: ["Max"],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];

function encontrarDonoDoPet(nomePet) {
  for (let usuario of usuarios) {
    if (usuario.pets.includes(nomePet)) {
      return `O dono(a) do(a) ${nomePet} é o(a) ${usuario.nome}.`;
    }
  }
  return `Que pena, ${nomePet}, não encontramos seu dono(a).`;
}

const donoDoPet = encontrarDonoDoPet("Max");
console.log(donoDoPet);

const donoDoPet2 = encontrarDonoDoPet("Rex");
console.log(donoDoPet2);
