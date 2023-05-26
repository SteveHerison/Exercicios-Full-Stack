const caractere = "E";


if (caractere >= 0 && caractere <= 9) {
  console.log("Número");

}else if (caractere == "A" || caractere == "E" || caractere == "I" || caractere == "O" || caractere == "U"){
  console.log("Vogal maiúscula");

} else if (caractere == "a" || caractere == "e" || caractere == "i" || caractere == "o" || caractere == "u"){
  console.log("Vogal minuscula");
} else {
  console.log("Consoante");
}
