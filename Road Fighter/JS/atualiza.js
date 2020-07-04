function atualiza(){
    frames++
    if(estadoAtual == estados.jogando){
        player.atualiza()
        obstaculo.atualiza()
    }
}