const carrinho = {
  nomeDoCliente: "Guido Bernal",
  produtos: [
    {
      id: 1,
      nome: "Camisa",
      qtd: 3,
      precoUnit: 3000
    },
    {
      id: 2,
      nome: "Bermuda",
      qtd: 2,
      precoUnit: 5000
    }
  ],
  
  calcularTotalDeItens: function() {
    let totalItens = 0;

    for (let i = 0; i < this.produtos.length; i++) {
      const produto = this.produtos[i];
      totalItens += produto.qtd;
    }
    
    return totalItens;
  },
  
  calcularTotalAPagar: function() {
    let totalPagar = 0;

    for (let i = 0; i < this.produtos.length; i++) {
      const produto = this.produtos[i];
      totalPagar += produto.qtd * produto.precoUnit / 100;
    }
    
    return totalPagar;
  },
  
  imprimirDetalhes: function() {
    console.log(`Cliente: ${this.nomeDoCliente}\n`);
    for (let i = 0; i < this.produtos.length; i++) {
      const produto = this.produtos[i];
      const valorTotal = produto.qtd * produto.precoUnit / 100;
      console.log(`Item ${i+1} - ${produto.nome} - ${produto.qtd} und - R$ ${valorTotal.toFixed(2)}`);
    }
    this.imprimirResumo();
  },
  
  imprimirResumo: function () {
    const totalItens = this.calcularTotalDeItens();
    const totalPagar = this.calcularTotalAPagar();
    
    console.log(`Cliente: ${this.nomeDoCliente}`);
    console.log(`Total de itens: ${totalItens} itens`);
    console.log(`Total a pagar: R$ ${totalPagar.toFixed(2)}`);
    
    const desconto = this.calcularDesconto();
    if (desconto > 0) {
      console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
      console.log(`Total com desconto: R$ ${(totalPagar - desconto).toFixed(2)}`);
    }
  },
  
  addProduto: function(novoProduto) {
    let produtoExistente = false;
    for (let item of this.produtos) {
      if (item.id === novoProduto.id) {
        item.qtd += novoProduto.qtd;
        produtoExistente = true;
        break;
      }
    }
    if (!produtoExistente) {
      this.produtos.push(novoProduto);
    }
    this.imprimirResumo();
  },
  
  calcularDesconto: function() {
    const totalItens = this.calcularTotalDeItens();
    const totalPagar = this.calcularTotalAPagar();
    
    let desconto = 0;
    
    if (totalItens > 4) {
      const precos = this.produtos.map(p => p.precoUnit / 100);
      const menorPreco = Math.min(...precos);
      desconto = menorPreco;
    }
    
    if (totalPagar > 10000) {
      const desconto10 = totalPagar * 0.1;
      desconto = Math.max(desconto, desconto10);
    }
    
    return desconto;
  },

  imprimirResumoDoCarrinho: function() {
    const nomeDoCliente = this.nomeDoCliente;
    const totalDeItens = this.calcularTotalDeItens();
    const totalAPagar = this.calcularTotalAPagar().toFixed(2);
    console.log(`Cliente: ${nomeDoCliente}`);
    console.log(`Total de itens: ${totalDeItens} itens`);
    console.log(`Total a pagar: R$ ${totalAPagar}`);
  },
};

carrinho.imprimirDetalhes();