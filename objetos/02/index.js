
const carro = {
marca: "Fiat",
modelo:"uno",
ano:"2022",
cor:"Vermelho",
quantidade_portas:4,
automatico: true
};

let automatico = carro.automatico ? "sim" : "não";

console.log(`marca ${carro.marca} modelo${carro.modelo} ano${carro.ano} cor${carro.cor} quantidade_portas ${carro.quantidade_portas} automatico ${automatico}`)