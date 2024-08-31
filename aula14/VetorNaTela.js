let valores = [8,1,7,4,2,9]
//console.log(valores)
let search = valores.indexOf(3)
let search2 = valores.indexOf(1)


if(search == -1 && search2 == -1){
    console.log('sem resposta')
}else{
    console.log(`Temos resposta no indice ${search} e ${search2}`)
}
/*for(let pos=0; pos < valores.length; pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
/*
for(let pos in valores){
    console.log(`${valores[pos]}`)
}
    */
