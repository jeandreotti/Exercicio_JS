function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('verifique os dados e tente novamente')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
   
        if (fsex[0].checked) {
            genero='homem'
            if (idade >=0 && idade <= 10){
                //crianca
                img.setAttribute('src','7Homem_bebe.jpg')
            } else if (idade<21) {
                //jovem
                img.setAttribute('src','5Homem_jovem.jpg')
            } else if (idade <= 50){
                //adulto
                img.setAttribute('src','3Homem_adulto.jpg')
            }else {
                //idoso
                img.setAttribute('src','1homem_velho.jpg')
            }
        }
            else if(fsex[1].checked) {
                genero = 'mulher'
                if (idade >=0 && idade <= 10){
                    //crianca
                    img.setAttribute('src','8Mulher_bebe.jpg')
                } else if (idade<21) {
                    //jovem
                    img.setAttribute('src','6Mulher_jovem.jpg')
                } else if (idade <= 50){
                    //adulto
                    img.setAttribute('src','4Mulher_adulta.jpg')
                }else {
                    //idoso
                    img.setAttribute('src','2mulher_velha.jpg')
                }
            }

           res.style.textAlign = 'center'
            res.innerHTML =`detectamos ${genero} com  ${idade} anos.`
            res.appendChild(img)
        }
  
}