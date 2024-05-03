   
    
    var imagem2 = document.getElementById('img2')
    var imagem3 = document.getElementById('img3')
    var imagem4 = document.getElementById('img4')
    var imagem5 = document.getElementById('img5')
    var imagem6 = document.getElementById('img6')
    var imagem7 = document.getElementById('img7')
    var imagem8 = document.getElementById('img8')
    var imagem9 = document.getElementById('img9')
    var imagem10 = document.getElementById('img10')
    var imagem11 = document.getElementById('img11')
    var txt = document.getElementById('txt')
    var masc = document.getElementById('imasc')
    var femi = document.getElementById('ifemi')

    
    function clicou(){
        var nascimento =document.getElementById('idata').value
        var ano = new Date().getFullYear()
        var idade = ano - Number(nascimento)
        var img = document.getElementById('img')
        var detector = document.getElementById('detector')
        var imagem1 = document.getElementById('img1')

        
    if(femi.checked && nascimento >= 2019 && nascimento <= ano){//nenem  Feminino
        img.style.display='block'
        detector.innerText=`Voce tem ${idade} anos, é uma nenem.`
        imagem1.style.display='none'
        imagem2.style.display='block'
        imagem3.style.display='none'
        imagem4.style.display='none'
        imagem5.style.display='none'
        imagem6.style.display='none'
        imagem7.style.display='none'
        imagem8.style.display='none'
        imagem9.style.display='none'
        imagem10.style.display='none'
        imagem11.style.display='none'
        txt.style.display='none'
    }else if(masc.checked && nascimento >= 2019 && nascimento <= ano){//nenem Masculino
        img.style.display='block'
        detector.innerText=`Voce tem ${idade} anos, é um nenem.`
        imagem1.style.display='block'
        imagem2.style.display='none'
        imagem3.style.display='none'
        imagem4.style.display='none'
        imagem5.style.display='none'
        imagem6.style.display='none'
        imagem7.style.display='none'
        imagem8.style.display='none'
        imagem9.style.display='none'
        imagem10.style.display='none'
        imagem11.style.display='none'
        txt.style.display='none'
    }else if(femi.checked && nascimento >= 2013 && nascimento <= ano ){//criança feminino
        img.style.display='block'
        detector.innerText=`voce tem ${idade} anos, é uma menina.`
        imagem1.style.display='none'
        imagem2.style.display='none'
        imagem3.style.display='none'
        imagem4.style.display='block'
        imagem5.style.display='none'
        imagem6.style.display='none'
        imagem7.style.display='none'
        imagem8.style.display='none'
        imagem9.style.display='none'
        imagem10.style.display='none'
        imagem11.style.display='none'
        txt.style.display='none'
    }else if(masc.checked && nascimento >= 2013 && nascimento <= ano ){//criança masculino
        img.style.display='block'
        detector.innerText=`voce tem ${idade} anos, é um menino.`
        imagem1.style.display='none'
        imagem2.style.display='none'
        imagem3.style.display='block'
        imagem4.style.display='none'
        imagem5.style.display='none'
        imagem6.style.display='none'
        imagem7.style.display='none'
        imagem8.style.display='none'
        imagem9.style.display='none'
        imagem10.style.display='none'
        imagem11.style.display='none'
        txt.style.display='none'
    }else if(nascimento >= 2007 && nascimento <= ano){//adolescente
        img.style.display='block'
        detector.innerText=`voce tem ${idade} anos, é um adolescente.`
        imagem1.style.display='none'
        imagem2.style.display='none'
        imagem3.style.display='none'
        imagem4.style.display='none'
        imagem5.style.display='block'
        imagem6.style.display='none'
        imagem7.style.display='none'
        imagem8.style.display='none'
        imagem9.style.display='none'
        imagem10.style.display='none'
        imagem11.style.display='none'
        txt.style.display='none'
    }else if(masc.checked && nascimento >= 1999 && nascimento <= ano){//jovem masculino
        img.style.display='block'
        detector.innerText=`voce tem ${idade} anos, é um rapaz.`
        imagem1.style.display='none'
        imagem2.style.display='none'
        imagem3.style.display='none'
        imagem4.style.display='none'
        imagem5.style.display='none'
        imagem6.style.display='block'
        imagem7.style.display='none'
        imagem8.style.display='none'
        imagem9.style.display='none'
        imagem10.style.display='none'
        imagem11.style.display='none'
        txt.style.display='none'
    }else if(femi.checked && nascimento >= 1999 && nascimento <= ano){//jovem feminino
        img.style.display='block'
        detector.innerText=`voce tem ${idade} anos, é uma moça.`
        imagem1.style.display='none'
        imagem2.style.display='none'
        imagem3.style.display='none'
        imagem4.style.display='none'
        imagem5.style.display='none'
        imagem6.style.display='none'
        imagem7.style.display='block'
        imagem8.style.display='none'
        imagem9.style.display='none'
        imagem10.style.display='none'
        imagem11.style.display='none'
        txt.style.display='none'
    }else if(masc.checked && nascimento >= 1975 && nascimento <= ano){//adulto masculino
        img.style.display='block'
        detector.innerText=`voce tem ${idade} anos, é um homem adulto.`
        imagem1.style.display='none'
        imagem2.style.display='none'
        imagem3.style.display='none'
        imagem4.style.display='none'
        imagem5.style.display='none'
        imagem6.style.display='none'
        imagem7.style.display='none'
        imagem8.style.display='block'
        imagem9.style.display='none'
        imagem10.style.display='none'
        imagem11.style.display='none'
        txt.style.display='none'
    }else if(femi.checked && nascimento >= 1975 && nascimento <= ano){//adulto feminino
        img.style.display='block'
        detector.innerText=`voce tem ${idade} anos, é uma mulher adulta.`
        imagem1.style.display='none'
        imagem2.style.display='none'
        imagem3.style.display='none'
        imagem4.style.display='none'
        imagem5.style.display='none'
        imagem6.style.display='none'
        imagem7.style.display='none'
        imagem8.style.display='none'
        imagem9.style.display='block'
        imagem10.style.display='none'
        imagem11.style.display='none'
        txt.style.display='none'
    }else if(masc.checked && nascimento <= 1974 && nascimento <= ano && nascimento > 1924){//senhor masculino
        img.style.display='block'
        detector.innerText=`voce tem ${idade} anos, é um senhor.`
        imagem1.style.display='none'
        imagem2.style.display='none'
        imagem3.style.display='none'
        imagem4.style.display='none'
        imagem5.style.display='none'
        imagem6.style.display='none'
        imagem7.style.display='none'
        imagem8.style.display='none'
        imagem9.style.display='none'
        imagem10.style.display='block'
        imagem11.style.display='none'
        txt.style.display='none'
    }else if(femi.checked && nascimento <= 1974 && nascimento <= ano && nascimento > 1924){//senhora feminino
        img.style.display='block'
        detector.innerText=`voce tem ${idade} anos, é uma senhora.`
        imagem1.style.display='none'
        imagem2.style.display='none'
        imagem3.style.display='none'
        imagem4.style.display='none'
        imagem5.style.display='none'
        imagem6.style.display='none'
        imagem7.style.display='none'
        imagem8.style.display='none'
        imagem9.style.display='none'
        imagem10.style.display='none'
        imagem11.style.display='block'
        txt.style.display='none'
    }else if(nascimento < 1970 || nascimento > ano ){//erro
        alert('Digite uma data valida')
    }
}
