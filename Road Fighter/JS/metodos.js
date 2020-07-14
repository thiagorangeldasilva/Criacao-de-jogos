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
        if(obstaculo.y > 100 && obstaculo.x !== valorMudanca){
            if(obstaculo.x > valorMudanca){
                return obstaculo.x - 3 < valorMudanca ? valorMudanca : obstaculo.x - 3 
            }else if(obstaculo.x < valorMudanca){
                return obstaculo.x + 3 > valorMudanca ? valorMudanca : obstaculo.x + 3
            } 
        }else{
            return obstaculo.x
        }
    }else if(obstaculo.cor !== validacao){
        return obstaculo.x
    }
}

function TempoInsere(velocidade){
    if(velocidade < 7){
        return 120
    }else if(velocidade < 10){
        return 100
    }else if(velocidade < 12){
        return 80
    }else if(velocidade <= 16){
        return 60
    }
}

function validação(objeto, chave){
    return objeto[chave] < 0 ? 0 : objeto[chave]
}