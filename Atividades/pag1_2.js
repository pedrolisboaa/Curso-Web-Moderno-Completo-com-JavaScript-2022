function converterIdadeEmAnosParaDias(idade){
    const calculo = idade * 365
    return calculo
}

let idadePedro = converterIdadeEmAnosParaDias(25)
console.log(idadePedro)