const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let nome = []

for (let letra of nomes){
    if (letra[0] === "A" || letra[0] === "a"){
    nome.push(letra)
    }
}

console.log(nome);