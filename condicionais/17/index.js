//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;


if (valorDoProduto === 100000){

  const ValorDasParcelas = (valorDoProduto / quantidadeDoParcelamento) / 100;
  const valorQueFalta = (valorDoProduto - (valorPago * 100))

  if (valorQueFalta > 0) {
    const parcelasRestante = (valorQueFalta / ValorDasParcelas) / 100

    console.log(`Restam ${parcelasRestante} parcelas de R$${ValorDasParcelas}`)
  }
  
}
