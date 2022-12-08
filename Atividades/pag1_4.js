function nomeDosMeses(mes){
    meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
    return meses[mes-1]
}

let mes = nomeDosMeses(12)

if (mes === undefined) {
    console.log('Esse mês não existe.')
}else{
    console.log(mes)
}
