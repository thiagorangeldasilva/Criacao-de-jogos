function desenha(){
    contexto.fillStyle = '#fff'
    contexto.fillRect(0, 0, LARGURA, ALTURA)

    player.desenha()
    obstaculo.desenha()
}