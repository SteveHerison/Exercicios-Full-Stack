let nomeArquivo = 'Foto da Familia.pdf';

function validarArquivo(nomeArquivo) {
  const extensoesPermitidas = ['jpg', 'jpeg', 'gif', 'png', ];
//split() para separar a string do nome do arquivo em um array, utilizando o caractere "." como delimitador.
//pop() é utilizado para obter o último elemento do array, que corresponde à extensão do arquivo. 
//"extensao" contém somente a extensão do arquivo, sem o restante do nome. 
  const extensao = nomeArquivo.split('.').pop();
//includes() é utilizado para verificar se um elemento está presente em um array.
//toLowerCase() para transformar a extensão em letras minúsculas,também em letras minúsculas.
  if (extensoesPermitidas.includes(extensao.toLowerCase())) {
    console.log('Arquivo válido');
  } else {
    console.log('Arquivo inválido');
  }
}

validarArquivo(nomeArquivo);

nomeArquivo = 'Foto da Familia.png';

validarArquivo(nomeArquivo);