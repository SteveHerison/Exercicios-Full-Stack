function replaceAll(original, texto, novotexto){
  while (original.includes(texto)){
      original = original.replace(texto, novotexto);
  }
  return original;
}

const texto = "Aprenda programar do zero na Cubos Academy";

let Url = texto.toLowerCase();

console.log(replaceAll(Url, " ", "-"));