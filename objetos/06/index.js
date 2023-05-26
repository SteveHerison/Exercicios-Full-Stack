const usuario = [
{
    nome: "Ana",
    idade: 18,
},
{
    nome: "Beatriz",
    idade: 15,
},
{
    nome: "Carlos",
    idade: 16,
},
{
    nome: "Antonio",
    idade: 32,
},
]
const jovem = [

]

const adulto = [

]
for(i = 0; i < usuario.length; i++){
    if (usuario[i].idade >= 18){
    adulto.push(usuario[i]);
    }else {
    jovem.push(usuario[i]);
    }

}

console.log(adulto);

console.log(jovem);