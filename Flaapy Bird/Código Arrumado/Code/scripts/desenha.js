function desenha(){
    bg.desenha(0, 0)
    /*
    contexto.fillStyle = '#50beff'
    contexto.fillRect(0, 0, LARGURA, ALTURA)
    */
   
    chao.desenha()
    if (estadoAtual == estados.jogando || estadoAtual == estados.jogar){
        bloco.desenha()
    }
    if(estadoAtual == estados.jogando){
        obstaculo.desenha()
        /*contexto.fillStyle ="#fff"
        contexto.font = "30px Arial"
        contexto.fillText(`Score ${bloco.score}`, 30, chao.altura / 1.1 + chao.y)
        contexto.fillText(`Vidas ${bloco.vidas}`, 30, chao.altura / 3 + chao.y)
        contexto.fillText(`Level ${faseAtual}`, 150, chao.altura / 1.1 + chao.y)*/ 
    }else if(estadoAtual == estados.perdeu){
        playerPerdeu.desenha(LARGURA / 2 - 100, ALTURA / 2 - 100)
    }
}