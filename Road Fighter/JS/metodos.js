const condicao = {
    eixoPlayer(objeto, posicao){
        posicao = posicao.toLowerCase()
        switch(posicao){
            case 'acima':
                return objeto.y
                break
            case 'abaixo':
                return objeto.y + objeto.altura
                break
            case 'direita':
                return objeto.x - objeto.largura / 2
                break
            case 'esquerda':
                return objeto.x + objeto.largura / 2
                break
        }
    },

    eixoObstaculo(objeto, posicao){
        posicao = posicao.toLowerCase()
        switch(posicao){
            case 'acima':
                return objeto.y
                break
            case 'abaixo':
                return objeto.y + objeto.altura
                break
            case 'direita':
                return objeto.x
                break
            case 'esquerda':
                return objeto.x + objeto.largura
                break
        }
    }
}

function mudaPosicao(obstaculo, validacao, valorMudanca){
    if(obstaculo.cor === validacao){
        console.log(valorMudanca, obstaculo.x, obstaculo)
        if(obstaculo.y > 100){
            if(obstaculo.x > valorMudanca){
                return obstaculo.x - 3 < valorMudanca ? valorMudanca : obstaculo.x - 3 
            }else if(obstaculo.x < valorMudanca){
                return obstaculo.x + 3 < valorMudanca ? valorMudanca : obstaculo.x + 3
            } 
        }
    }else if(obstaculo.cor !== validacao){
        return obstaculo.x
    }
}