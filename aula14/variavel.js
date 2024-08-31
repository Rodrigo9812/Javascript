let num = [5,2,8,9,3]

num[5]=4
num.push(1)
num.sort()

console.log(num)
console.log(`o vetor tem ${num.length} posiçoes`)
console.log(`o primeiro valor é o ${num[0]}`)

/*for(let pos = 0; pos < num.length; pos++){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}
    */
/*
for (let pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}
    */