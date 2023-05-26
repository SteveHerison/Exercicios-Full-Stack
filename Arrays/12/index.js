const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

while(filaDeDentro.length > 0 && filaDeDentro.length < 5) {
    const pessoa = filaDeFora.shift(filaDeDentro)
    filaDeDentro.push(pessoa)
}

console.log(filaDeDentro);
console.log(filaDeFora);
