const comentario = "Esse COVID é muito perigoso!";

// função replaceAll que substitui todas as ocorrências de uma determinada substring texto em uma string original por outra substring novotexto
//A função utiliza um laço while para repetir a substituição enquanto a substring texto ainda é encontrada na string original. A cada iteração do laço, a função substitui a primeira ocorrência da substring texto por novotexto usando o método replace() da string.
//Quando a função não encontra mais a substring texto na string original, ela retorna a string resultante da substituição.
function replaceAll(original, texto, novotexto){
    while (original.includes(texto)){
        original = original.replace(texto, novotexto);
    }
    return original;
    
}

let Encontrado = ["covid", "pandemia"].some(substring => comentario.toLowerCase().includes(substring));

if (Encontrado) {
    console.log("Comentário bloqueado por conter palavras proibidas.");
  } else {
    console.log("Comentário autorizado.");
  }