function atualiza(){
    frames++
    if(estadoAtual == estados.jogando){
        if(!player._atualiza){
            player.atualiza()
        }
        player.atualizaGasolina()
        obstaculo.atualiza()
        progresso.atualiza()
        velocidade = velocidade < 0 ? 0 : velocidade
        player.gasolina = validação(player, "gasolina")
        progresso.distancia = validação(progresso, "distancia")
    }
}