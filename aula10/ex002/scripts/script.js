   
    
    var imagem2 = document.getElementById('img2')
    var imagem3 = document.getElementById('img3')
    var imagem5 = document.getElementById('img5')
    var imagem6 = document.getElementById('img6')
    var imagem8 = document.getElementById('img8')
    var imagem10 = document.getElementById('img10')
function clicou(){
    var nascimento =document.getElementById('idata').value
    var ano = new Date().getFullYear()
    var idade = ano - Number(nascimento)
    var img = document.getElementById('img')
    var detector = document.getElementById('detector')
    var imagem1 = document.getElementById('img1')

    if(nascimento >= 2019){//nenem
        img.style.display='block'
        detector.innerText=`Voce tem ${idade} anos, é um nenem`
        imagem1.style.display='block'
        imagem3.style.display='none'
        imagem6.style.display='none'
    }else if(nascimento >= 2013 ){//criança
        img.style.display='block'
        detector.innerText=`voce tem ${idade} anos, é uma criança`
        imagem1.style.display='none'
        imagem5.style.display='none'
        imagem3.style.display='block'
    }else if(nascimento >= 2007){//adolescente
        img.style.display='block'
        detector.innerText=`voce tem ${idade} anos, é um adolescente`
        imagem1.style.display='none'
        imagem5.style.display='block' 
        imagem6.style.display='none'
        imagem3.style.display='none'
    }else if(nascimento >= 1999){//jovem
        img.style.display='block'
        detector.innerText=`voce tem ${idade} anos, é um jovem`
        imagem6.style.display='block'
        imagem5.style.display='none'
        imagem1.style.display='none'
        imagem8.style.display='none'
        imagem10.style.display='none'

    }else if(nascimento >= 1975){//adulto
        img.style.display='block'
        detector.innerText=`voce tem ${idade} anos, é um adulto`
        imagem8.style.display='block'
        imagem5.style.display='none'
        imagem6.style.display='none'
        imagem1.style.display='none'
        imagem10.style.display='none'
    }else if(nascimento >=1974 || nascimento < 1974){//senhor
        img.style.display='block'
        detector.innerText=`voce tem ${idade} anos, é um senhor`
        imagem10.style.display='block'
        imagem8.style.display='none'
        imagem5.style.display='none'
        imagem6.style.display='none'
        imagem1.style.display='none'
    }
}
