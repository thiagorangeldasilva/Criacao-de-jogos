function desenha(){
    bg.desenha(0, 0)

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
        playerPerdeu.desenha(LARGURA / 2 - 150, ALTURA / 2 - 150)
    }
}