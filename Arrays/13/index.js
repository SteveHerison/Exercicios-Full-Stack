const disjuntores = [false, false, true, false, false, true, false,];

for (let ligado = 0; ligado < disjuntores.length; ligado ++){
    if(disjuntores[ligado]){
        console.log(ligado);
    }
}
