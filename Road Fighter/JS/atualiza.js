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
        player.gasolina = player.gasolina < 0 ? 0 : player.gasolina
        progresso.distancia = progresso.distancia < 0 ? 0 : progresso.distancia
    }
}