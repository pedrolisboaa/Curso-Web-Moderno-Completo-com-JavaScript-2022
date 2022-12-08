// Armazenando umua função em uma variavel

const imprimirSoma = function(a, b){
    return a + b
}


console.log(imprimirSoma(10,  15))

// Função arrow
const soma = (a, b) => {return a  + b}
console.log(soma(5, 22))

// Retorno implicito
const soma2  = (a, b) => a + b
console.log(soma2(30, 25))


const deixarMaisculo = (palavra) => palavra.toUpperCase()

console.log(deixarMaisculo('pedro'))