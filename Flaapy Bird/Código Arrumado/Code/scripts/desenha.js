function desenha(){
    contexto.fillStyle = '#50beff'
    contexto.fillRect(0, 0, LARGURA, ALTURA)

    chao.desenha()
    bloco.desenha()
    obstaculo.desenha()
    if(estadoAtual == estados.jogando){
        contexto.fillStyle ="#fff"
        contexto.font = "30px Arial"
        contexto.fillText(`Score ${bloco.score}`, 30, chao.altura / 1.1 + chao.y)
        contexto.fillText(`Vidas ${bloco.vidas}`, 30, chao.altura / 3 + chao.y)
        contexto.fillText(`Level ${faseAtual}`, 150, chao.altura / 1.1 + chao.y) 
        
    }
}