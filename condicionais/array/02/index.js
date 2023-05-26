const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const invalida = palavras.some((palavra) => palavra.length > 5);

if (invalida) {
  console.log("existe palavra inválida");
} else {
  console.log("array validado");
}
