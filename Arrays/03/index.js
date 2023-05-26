const numeros = [54, 22, 14, 87, 10, 284];

let encontrado = false;

for (let numero of numeros){
    if (numero === 10){
    console.log(numeros.indexOf(10));
    encontrado = true;
    break
    }
}

if (!encontrado) {

console.log(numeros.indexOf(10));
}