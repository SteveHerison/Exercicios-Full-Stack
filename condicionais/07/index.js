const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui

if (aposentada === false && portadoraDeDoenca === false && totalDeRendimentos >= 2855970) {
  console.log("PEGA LEAO");
} else if (portadoraDeDoenca === true || aposentada === true){
  console.log("ISENTA");
} else if (aposentada === false && portadoraDeDoenca === false && totalDeRendimentos < 2855970){
  console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
} 
