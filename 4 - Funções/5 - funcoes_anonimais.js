const soma = function (x, y){
    return x + y
}

const imprimirResultado = function(x, y, operacao = soma){
    let resultado = soma(x, y)
    console.log(`A ${x} + ${y} = ${resultado}`)
}

imprimirResultado(5, 6, soma)