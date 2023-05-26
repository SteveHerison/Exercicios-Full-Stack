const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const lista = palavras.some((palavra) => {
  if (palavra === "cerveja" || palavra === "vodka") {
    return true;
  } else {
    return false;
  }
});

if (lista) {
  console.log(` revise sua lista, joão. possui bebida com venda proibida!`);
} else {
  console.log(`tudo certo, vamos as compras!`);
}
