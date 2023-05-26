const pacientes = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];

function agendarPaciente(pacientes, nome) {
  pacientes.push(nome);
  console.log(pacientes.join(", "));
}

function atenderPaciente(pacientes) {
  pacientes.shift();
  console.log(pacientes.join(", "));
}

function cancelarAtendimento(pacientes, nome) {
  const index = pacientes.indexOf(nome);
  if (index > -1) {
    pacientes.splice(index, 1);
  }
  console.log(pacientes.join(", "));
}

agendarPaciente(pacientes, "Marcelo");
atenderPaciente(pacientes);
cancelarAtendimento(pacientes, "Pedro");
