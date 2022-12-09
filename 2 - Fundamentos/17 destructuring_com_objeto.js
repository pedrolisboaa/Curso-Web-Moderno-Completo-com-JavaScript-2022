const pessoa = {
    nome: 'Pedro',
    idade: 50,
    endereco: {
        casa: 10,
        quadra: 3
    }
}

// forma comum dde retirar um dados do objeto.

//let nome = pessoa.nome
//let idade = pessoa.idade
//console.log(nome)
//console.log(idade)

// com Destructuring
const {nome, idade, endereco:{casa}} = pessoa
console.log(nome)
console.log(idade)
console.log(casa)


const {nome:n, idade:i} = pessoa
console.log(n)
console.log(i)
