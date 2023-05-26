const numeros = [8, 11, 4, 1];


let qualMaior = 0;

for (const diferença of numeros) {
 if (qualMaior === 0){
    qualMaior = diferença;
 } else {
 if (diferença > qualMaior) {
    qualMaior = diferença;
    }
 }

}

let qualMenor = 0;

for (const diferença of numeros) {
 if (qualMenor === 0){
    qualMenor = diferença;
 } else {
 if (diferença < qualMenor) {
    qualMenor = diferença;
    }
 }

}


console.log(qualMaior - qualMenor);