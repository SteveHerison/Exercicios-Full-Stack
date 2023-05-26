const numeroCartao = '1111222233334444';

function formatar_cartao(cartao) {
// Extrai os primeiros 4 e últimos 4 dígitos do cartão
const inicio = cartao.slice(0, 4);
const final = cartao.slice(-4);    
// Substitui os caracteres ocultos por "*"
const meio = "*".repeat(8);    
// Retorna a string formatada
return `${inicio}${meio}${final}`;
}

console.log(formatar_cartao(numeroCartao));