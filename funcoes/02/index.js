const carro = {
  ligado: false,
  velocidade: 0,
  ligar: function(){
    if (this.ligado === true){
        console.log("Este carro já está ligado.");
    } else {
        carro.ligado = true;
        console.log(`carro ligado. velocidade ${this.velocidade}`);
    }
  },
  desligar: function(){
    if (this.ligado === false){
        console.log("Este carro já está desligado.");
    } else {
        carro.ligado = false;
        console.log(`Este carro já está ligado. velocidade 0.`);
    }
  },
  acelerar: function(){
    if (this.ligado === false){
    console.log("Não é possível acelerar um carro desligado.");
  }  else  {
    this.velocidade += 10;
    console.log(`carro ligado. velocidade ${this.velocidade}`)
  }
},
 desacelerar: function(){
    if (this.ligado === false){
    console.log("Não é possível desacelerar um carro desligado.");
  }  else {
    this.velocidade -= 10;
    console.log(`carro ligado.velocidade ${this.velocidade}`)
}
 }
};


carro.desligar()
carro.ligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desligar()
carro.acelerar()
carro.desacelerar()