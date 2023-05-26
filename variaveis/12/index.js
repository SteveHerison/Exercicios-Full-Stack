let emprestimo = 60000;

let pago = 90000;

let meses = 24;


let i = (pago/emprestimo) ** (1/meses) - 1;

let taxa = i * 100;

console.log(`O seu financiamento de 60000 reais teve uma taxa de juros de ${taxa.toFixed(4)}, pois após 24 meses você teve que pagar 90000 reais.`);