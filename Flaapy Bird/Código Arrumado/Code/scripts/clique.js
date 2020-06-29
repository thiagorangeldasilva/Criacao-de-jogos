function clique(event){
    if(estadoAtual == estados.jogando){
        bloco.pular()
    }else if(estadoAtual == estados.jogar){
        reset()
        estadoAtual = estados.jogando
    }else if(estadoAtual == estados.perdeu){
        estadoAtual = estados.jogar   
    }
}