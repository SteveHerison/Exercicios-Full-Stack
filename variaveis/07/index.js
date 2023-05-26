
let PopulacaoInfectada = 1000

let quantidadeQuePossaTransmitir = 4;

let tempoPercorrido = 7;

let p = PopulacaoInfectada * (quantidadeQuePossaTransmitir) ** (tempoPercorrido / 7);

console.log(`Após 7 dias, o total de pessoas infectadas será de ${p}, uma vez que inicialmente existiam 1000 pessoas infectadas.`);



