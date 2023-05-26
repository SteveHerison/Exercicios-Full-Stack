const usuario = [
    {
        nome: "João",
        idade: 25,
        maior_idade: true
    },
    {
        nome: "Ana",
        idade: 18,
        maior_idade: true
    },
    {
        nome: "Beatriz",
        idade: 15,
        maior_idade: false
    },
    {
        nome: "Carlos",
        idade: 16,
        maior_idade: false
    },
    {
        nome: "Antonio",
        idade: 32,
        maior_idade: true
    }
]



for(i = 0; i < usuario.length; i++){
    if (usuario[i].idade >= 18){
        console.log(`${usuario[i].nome} é maior de idade`)
    }else {
        console.log(`${usuario[i].nome} é menor de idade`);
    }
}


