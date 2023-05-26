const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const novoArray = frutas.map((fruta, index) => {
  //deixar a primeira letra em maiúscula e as demais em minúscula. Isso é feito usando o método charAt(0)
  // para obter o primeiro caractere da palavra, o método toUpperCase()
  //para colocar a primeira letra em maiúscula e o método slice(1) para obter o restante da palavra em minúsculas.
  fruta = fruta.charAt(0).toUpperCase() + fruta.slice(1).toLowerCase();
  return index + " - " + fruta;
});

console.log(novoArray);
