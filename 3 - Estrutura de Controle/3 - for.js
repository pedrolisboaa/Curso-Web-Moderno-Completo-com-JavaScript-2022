let array = []
for(let i = 0; i < 100; i ++){
    if (i % 2 == 0){
        array.push(i)
        continue
    }
    console.log(i)
}


console.log(array)