const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (idade < 12 && idade > 65){
  console.log('ACESSO NEGADO');
} else if (possuiPatologia === true){
  console.log('ACESSO NEGADO');
}else if (altura < 150){
  console.log('ACESSO NEGADO');
} else if (idade < 18 && idade > 12 || ehEstudante === true){
  console.log('10 reais');
} else {
  console.log('20 reais');
}
