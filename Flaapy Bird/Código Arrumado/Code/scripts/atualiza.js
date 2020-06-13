function atualiza(){
    frames++
    if(estadoAtual == estados.jogando){
        bloco.atualiza()
        chao.atualiza()
        obstaculo.atualiza()
    }
}