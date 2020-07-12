function desenha(){
    chao.desenha()
    contexto.fillStyle = '#fff'
    contexto.fillRect(0, 0, 150, ALTURA)
    contexto.fillRect(450, 0, 150, ALTURA)
    player.desenha()
    obstaculo.desenha()
    texto.score()
}