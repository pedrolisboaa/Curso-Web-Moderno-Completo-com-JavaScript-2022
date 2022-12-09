function gritarNome(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!!!')
    }catch(e){
        console.log(e)
    }
    
}

const objeto = {nome: 'Pedro'}
gritarNome(objeto)
