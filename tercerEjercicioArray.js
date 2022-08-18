let arr1  = [4,4.4,2,1,3,23,-23,-2,0]

let arr2 = [17,3,-3,0.3,-1.02,55,333,-10000,1]

const CANTIDAD_DE_OPERACIONES = 4; 

var i = ""
var resultado = [];


function ejecutarOperaciones(a,b){
    if(a.length === b.length){
        i = (Math.ceil(a.length/CANTIDAD_DE_OPERACIONES))
        sumarRestarMultiplicarDividir(a,b)
        console.log("Resultado: "+ resultado)
    }
    else{
        console.log("los array no tienen la misma cantidad de elementos")
    }

}

function sumarRestarMultiplicarDividir(a,b){
    let posicion = 0;
        for(r=1; r <= i; r++){
            for(n=0; n <CANTIDAD_DE_OPERACIONES;n++){
                if(posicion<a.length){
                    switch(n){
                        case 0:
                            resultado[posicion] = (a[posicion] + b[posicion]);
                            posicion ++
                            break
                        case 1:
                            resultado[posicion] = (a[posicion] - b[posicion]);
                            posicion ++
                            break
                        case 2:
                            resultado[posicion] = (a[posicion] * b[posicion]);
                            posicion ++
                            break
                        case 3:
                            resultado[posicion] = (a[posicion] / b[posicion]);
                            posicion ++
                            break

                    }
                }
                else{n=CANTIDAD_DE_OPERACIONES}
            }
        }
    }

ejecutarOperaciones(arr1,arr2)