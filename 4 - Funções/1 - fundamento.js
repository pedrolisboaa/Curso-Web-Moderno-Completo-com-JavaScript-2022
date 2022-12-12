// Criar funçã de forma literal
function fun1(){

}

// Armazenar uma função em um variavel
const fun2 = function(){

}

// Armazenar dentro de um array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](5, 5))

// Armazenar dentro de um objeto
const obj = {
    falar: function(){return 'Oi!!!'}
}
console.log(obj.falar())


// Passar função como parametro
function somar1(a, b){ return a + b}
function multiplicar(a, b){return a * b}

function somarVariasFuncoes(x, y){
    return x + y
}


console.log(somarVariasFuncoes(somar1(5,5), multiplicar(2, 5)))
