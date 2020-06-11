function clique(event){
    if(estadoAtual == estados.jogando){
        bloco.pular()
    }else if(estadoAtual == estados.jogar){
        estadoAtual = estados.jogando
        reset()
    }else if(estadoAtual == estados.perdeu){
        estadoAtual = estados.jogar
        reset()
    }
}