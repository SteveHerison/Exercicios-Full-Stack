const letras = ["A", "a", "B", "C", "E", "e",];


total = 0;    

for (let letrasProcuradas of letras) {
    if (letrasProcuradas == "E" || letrasProcuradas == "e"){
    total ++;
    
}
}
if (total > 0)
console.log(total);

if (total === 0){
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`)
}
