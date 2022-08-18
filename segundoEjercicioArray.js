

let abecedario = [];

function generarAbecedario(x){
    for (i = 10; i < 36; i++){

        x.push(i.toString(36));
    }
}

generarAbecedario(abecedario)

console.log("Abecedario: "+ abecedario);