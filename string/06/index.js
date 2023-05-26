const celular = 7199918888;

function formatarCelular(celular) {
    const celularString = celular.toString();
  
    if (celularString.length === 10) {
      // Adiciona o DDD (71) e o 9 no início do número
      return `(${celularString.substr(0, 2)}) 9 ${celularString.substr(2, 4)}-${celularString.substr(6)}`;
    } else if (celularString.length === 9) {
      // Adiciona o 9 no início do número
      return `9 ${celularString.substr(0, 4)}-${celularString.substr(4)}`;
    } else {
      // Número inválido
      return "Número de celular inválido.";
    }
}

console.log(formatarCelular(celular));