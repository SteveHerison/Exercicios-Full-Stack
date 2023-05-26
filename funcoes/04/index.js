const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: []
};

contaBancaria.depositar = function(valor) {
    this.saldo += valor;
    this.historicos.push({
        tipo: "Depósito",
        valor: valor
    });
    return `Deposito de R$${valor/100} realizado para o cliente: ${this.nome}.`;
};

contaBancaria.sacar = function(valor) {
    if (valor > this.saldo) {
        return `Saldo insuficiente para o saque de: ${this.nome}.`;
    } else {
        this.saldo -= valor;
        this.historicos.push({
            tipo: "Saque",
            valor: valor
        });
        return `Saque de R$${valor/100} realizado para o cliente: ${this.nome}.`;
    }
};

contaBancaria.extrato = function() {
    let historico = "";
    for (let i = 0; i < this.historicos.length; i++) {
        historico += `${this.historicos[i].tipo} de R$${this.historicos[i].valor/100}\n`;
    }
    return `Extrato de ${this.nome} - Saldo: R$${this.saldo/100}\nHistórico:\n${historico}`;
};

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());