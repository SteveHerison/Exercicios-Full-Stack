//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
let desconto = valorDoProduto * 5/100;
let valorFinalDoProduto = valorDoProduto - desconto;

console.log(`Valor a ser pago: R$${valorFinalDoProduto}`);

} else if (tipoDePagamento === "cheque"){
let desconto = valorDoProduto * 3/100;
let valorFinalDoProduto = valorDoProduto - desconto;

console.log(`Valor a ser pago: R$${valorFinalDoProduto}`);

}else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
let desconto = valorDoProduto * 10/100
let valorFinalDoProduto = valorDoProduto - desconto;

console.log(`Valor a ser pago: R$${valorFinalDoProduto}`);
}
