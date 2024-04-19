var idade = 18
console.log('Em ano de eleiçao temos algumas regras para a votação:')
if(idade>17 && idade<70){//se for entre 18 e 69
    console.log(`Se voce tem ${idade} anos, o voto é obrigatorio.`)
}else if(idade>=16 ||idade>70){//se for maior ou igual a 16 ou maior que 70
    console.log(`Se voce tem ${idade} anos, seu voto é opcional`)
}else{
    console.log(`Voce nao vota.`)
}
if(idade>=16){
    console.log('Vote consciente.')
}

