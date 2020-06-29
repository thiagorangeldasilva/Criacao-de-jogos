function desenha(){
    bg.desenha(0, 0)
    chao.desenha()
    if (estadoAtual == estados.jogando){
        bloco.desenha()
    }
    if(estadoAtual == estados.jogando){
        obstaculo.desenha()
        contexto.fillStyle ="#000"
        contexto.font = "30px Verdana"
        contexto.fillText(`Score ${bloco.score}`, 30, chao.altura / 1.1 + chao.y)
        contexto.fillText(`Level ${faseAtual}`, 250, chao.altura / 1.1 + chao.y)
        contexto.fillText(`Life ${bloco.vidas}`, 450, chao.altura / 1.1 + chao.y)
    }else if(estadoAtual == estados.perdeu){
        playerPerdeu.desenha(LARGURA / 2 - 125, ALTURA / 2 - 150)
        contexto.fillStyle ="#000"
        contexto.font = "50px Verdana"
        contexto.fillText(`Gamer Over`, LARGURA / 2 - 155, ALTURA / 2 - 165)
        if(bloco.score <= record){
            contexto.fillText(`Score ${bloco.score}`, LARGURA / 2 - 100, ALTURA / 2 + 145)
        }else{
            contexto.fillText(`Novo`, LARGURA / 2 - 70, ALTURA / 2 + 145)
            localStorage.setItem("record", bloco.score)
            record = bloco.score
        }
        contexto.fillText(`Record ${record}`, LARGURA / 2 - 110, ALTURA / 2 + 200)
    }else if(estadoAtual == estados.jogar){
        playJogo.desenha(LARGURA / 2 - 180, ALTURA / 2 - 180)
    }
}