const nomes = ["Juninho", "Vidal", "Guido", "Dani", "Ruli", "Diego"];
const tamanhoDoGrupo = 4;

function separar(grupos) {
  const grupo1 = grupos.slice(0, 4);
  const grupo1Separado = grupo1.join();

  console.log(grupo1Separado);

  const grupo2 = grupos.slice(4);
  const grupo2Separado = grupo2.join();

  console.log(grupo2Separado);
}

separar(nomes);
