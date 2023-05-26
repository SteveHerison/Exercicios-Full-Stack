const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

function inverterArray (frutas){
 const inverter = frutas.reverse();
 const separar = inverter.join();
  
console.log(separar)
}

inverterArray(frutas);

const frutas1 = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

function retirar (frutas1){
 const remover = frutas1.slice(1,4);
 remover.push("Melão");
 console.log(remover);
}

retirar(frutas1);