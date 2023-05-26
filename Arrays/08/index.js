const numeros = [3, 24, 1, 8, 11, 7, 15];

let menor = 0;

for (const numero of numeros) {
 if (menor === 0){
    menor = numero;
 } else {
    if (numero > menor) {
        menor = numero;
    }
 }

}

console.log(menor);