function tabuada(){
    let num = document.getElementById('numero')
    let contas = document.getElementById('contas')
    let n1 = Number(num.value)
    let p = document.getElementById('p')
    contas.innerHTML=''
    if(num.value.length==0){
       window. alert('[ERRO] Digite um numero!')
    }else{
        for(let c = 1; c <= 10 ;c++ ){
            let linha = document.createElement('option')
            linha.innerHTML = `${n1} x ${c} = ${n1*c}`
            contas.appendChild(linha)
            p.innerHTML='Pronto!'
        }
    }
}
function limpar(){
    let num = document.getElementById('numero')
    let contas = document.getElementById('contas')
    p.innerHTML=''
    contas.innerHTML=''
    num.value=''
    let frase = document.createElement('option');
    frase.innerHTML = 'Digite um numero acima';
    contas.appendChild(frase);
}