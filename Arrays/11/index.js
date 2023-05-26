let original = [5, 7, 13, 17, 26, 34, 118, 245];


const numeroSelecionado = []

for (let numero of original){
    if(numero > 10 && numero < 20 || numero > 100){
        numeroSelecionado.push(numero);
    }

}

console.log(numeroSelecionado);

original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];

const numerosSelecionados = []

for (let numero of original){
    if(numero > 9 && numero < 20 || numero > 100){
        numerosSelecionados.push(numero);
    }

}

console.log(numerosSelecionados);