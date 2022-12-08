function calcularSalario(horasTrabalhadas, valorHora){
    const salario = (horasTrabalhadas * valorHora).toFixed(2)

    console.log(`O seu sálario é ${salario}.`)
}


calcularSalario(150, 40.5)