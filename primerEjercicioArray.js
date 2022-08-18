let arrayBinario = [
    1, 0, 0, 1, 0, 1, 1, 1,
    1, 0, 0, 1, 0, 0, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 1,
    1, 0, 0, 1, 1, 1, 1, 0
    ]

function mostrarArrayAntes(){
    console.log("Antes: " + arrayBinario)
}


function mostrarArrayDespues(){
    invertirValoresBinarios()
    console.log("Después: " + arrayBinario)
    
}

function invertirValoresBinarios(){
    for (i = 0; i <= arrayBinario.length; i++ ){
        switch(arrayBinario[i]){
            case 1: 
                
                arrayBinario[i] = 0;
            
            break

            case 0:
                arrayBinario[i] = 1;
            break
        }      
        
    }
}

function mostrarArrayAntesYDespues(){
    mostrarArrayAntes()
    mostrarArrayDespues()
}

mostrarArrayAntesYDespues()
