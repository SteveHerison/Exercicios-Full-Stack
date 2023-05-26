//[^\d] representa qualquer caractere que não seja um dígito numérico (0-9).
// O ^ dentro dos colchetes nega a classe de caracteres \d,
// indicando que queremos encontrar tudo que não for um dígito.
//O modificador g indica que a busca deve ser global, ou seja, que a
// expressão regular deve buscar em toda a string e não apenas na primeira ocorrência encontrada.
// variável regex, ela irá buscar por qualquer caractere que não seja um dígito numérico
// e o modificador g indica que essa busca será global na string.
function removerPontuacao(cpfOuCnpj) {
  const regex = /[^\d]/g;
  //replace da string para substituir todos os caracteres que correspondem
  // à expressão regular pelo caractere vazio '', removendo-os do CPF ou CNPJ.
  const cpfOuCnpjSemPontuacao = cpfOuCnpj.replace(regex, '');
  return cpfOuCnpjSemPontuacao;
}

const cpf = "011.022.033-44";
console.log(removerPontuacao(cpf))