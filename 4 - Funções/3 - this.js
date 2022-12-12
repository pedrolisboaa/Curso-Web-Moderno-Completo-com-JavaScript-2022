const pessoa = {
    saudacao: 'Bom dia!',
    nome: 'Pedro',
    falar(){
        console.log(this.saudacao)
    },
    falarNome(){
        console.log(`Meu nome é ${this.nome}`)
    }
}


pessoa.falar()
pessoa.falarNome()