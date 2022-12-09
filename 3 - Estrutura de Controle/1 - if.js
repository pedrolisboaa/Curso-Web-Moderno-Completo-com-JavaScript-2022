function informarSePassouDeAno(nota){
    if (nota >= 9){
        console.log('Muito bem aprovado!!')
    }else if (nota > 6){
        console.log('Passou de ano!')
    }else{
        console.log('Você reprovou!')
    }
}


informarSePassouDeAno(7)
informarSePassouDeAno(3)
