const pacientes = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];

function operacao(fila, operacao, nome) {
  if (operacao === "agendar") {
    fila.push(nome);
  } else if (operacao === "atender") {
    fila.splice(0, 1);
  }
  console.log(fila.join(", "));
}

operacao(pacientes, "atender");
operacao(pacientes, "agendar", "josé");
