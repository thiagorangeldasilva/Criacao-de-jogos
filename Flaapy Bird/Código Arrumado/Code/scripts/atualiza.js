function atualiza(){
    frames++
    if(estadoAtual == estados.jogando){
        bloco.atualiza()
        obstaculo.atualiza()
    }
}