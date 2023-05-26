
let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";


// Formata o identificador para ter seis dígitos
identificador = identificador.padStart(6, "0");

// O metodo toLowerCase é usado para transformar o nome em minusculas e o metodo
// split e usado para separar as palavras do nome em um array
// map e usado para percorrer cada palavra do array e transformar a primeira letra em maiuscula
//join e usado para juntar as palavras novamente em uma string separando por um espaco
nome = nome.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

// O metodo trim Remove os espaços do início e fim
email = email.trim();


console.log(identificador);
console.log(nome);
console.log(email);