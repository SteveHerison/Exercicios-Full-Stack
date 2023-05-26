function validarFormatoEmail(email) {
  const regex = /^[^@]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/;
  return regex.test(email);
}

function validarEmails(listaDeEmails) {
  const emailsValidos = [];
  const emailsInvalidos = [];

  listaDeEmails.forEach(email => {
    if (validarFormatoEmail(email)){
      emailsValidos.push(email);
    } else {
      emailsInvalidos.push(email);
    }
  });

  return {
    validos: emailsValidos,
    invalidos: emailsInvalidos
  };
}

const listaDeEmails = ['jose.messias@cubos.academy', 'jose@cubos.academy.br', 'jose.messias@cubos.io', "jose@cubos.academy", 
"jose@cubos", "jose.messias@cubos", "jose.messias@.", "jose.@cubos", ".@", "@.", "jose.messias@cubos.", ".messias@cubos.", ".messias@cubos"];

const resultado = validarEmails(listaDeEmails);

if (resultado.invalidos.length > 0) {
  console.log(`e-mails são inválidos: ${resultado.invalidos.join(', ')}`);
} else {
  console.log('e-mails são válidos');
}

if (resultado.validos.length > 0) {
  console.log(`e-mails são válidos: ${resultado.validos.join(', ')}`);
} else {
  console.log('e-mail é Inválido');
}

