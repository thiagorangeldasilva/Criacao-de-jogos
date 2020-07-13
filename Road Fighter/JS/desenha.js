function desenha(){
    
    if(estadoAtual === estados.jogar){
        contexto.fillStyle = '#fff'
        contexto.fillRect(0, 0, LARGURA, ALTURA)
        texto.jogar()
    }else if(estadoAtual === estados.jogando){
        chao.desenha()
        player.desenha()
        contexto.fillStyle = '#fff'
        contexto.fillRect(0, 0, 150, ALTURA)
        contexto.fillRect(450, 0, 150, ALTURA)
        obstaculo.desenha()
        texto.score()
    }
}