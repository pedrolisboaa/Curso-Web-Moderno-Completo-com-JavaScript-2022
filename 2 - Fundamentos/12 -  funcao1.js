function imprimirSoma(){
    let um = 5
    let dois = 10
    console.log(um + dois)
}

function imprimirSoma2(x, y){
    console.log(x + y)
}


function imprimirSoma3(x, y){
    return x + y
}


imprimirSoma()
imprimirSoma2(10, 3)
let soma = imprimirSoma3(99, 1)
console.log(soma)