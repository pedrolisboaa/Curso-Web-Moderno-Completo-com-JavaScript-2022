function gerarNumeroInterior(min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
}



while(numero != 0){
    var numero = gerarNumeroInterior(0, 50)
    console.log(numero) 
}

