const nome = 'Guido Cerqueira';

function gerarNickname(nome) {
//expressão regular /[^a-z0-9]/g substitui qualquer caractere que não seja uma letra ou número
// por uma string vazia.
    const nomeFormatado = nome.toLowerCase().replace(/[^a-z0-9]/g, '');
//A função split(' ') retorna um array de strings contendo todas as palavras que estão presentes no nome completo.
//Em seguida, estamos pegando apenas a primeira palavra (primeiro nome) do array gerado com a ajuda do índice [0]. 
    const primeiroNome = nomeFormatado.split(' ')[0];
//começa com "@" e é seguida pelo primeiro nome formatado, limitado em 13 caracteres.
// A função slice() é utilizada para pegar uma parte da string, a partir do índice 0 (primeira letra) e com no máximo 13 caracteres
    const nickname = `@${primeiroNome.slice(0, 13)}`;
    return nickname || '@semnome';
  }
  
  
  const nickname = gerarNickname(nome);
  console.log(nickname);