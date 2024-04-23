var agora = new Date() // Pega a hora atual do dispositivo que esta rodando o codigo
var hora = agora.getHours
console.log(`Agora sao exatamente ${hora} horas.`)
if(hora >= 5 && hora <= 11){
    console.log(`Bom dia!`)
}else if(hora >= 12 && hora < 19){
    console.log('Boa Tarde')
}else{
    console.log(`Boa noite!`)
}