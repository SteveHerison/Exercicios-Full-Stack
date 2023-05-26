const numeros = [2, 3, 4, 6];

let soma = 0;

for (let quantidade = 0; quantidade < numeros.length; quantidade++) {
   soma = soma += numeros[quantidade];
}

console.log(soma);