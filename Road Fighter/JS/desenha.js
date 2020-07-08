function desenha(){
    contexto.fillStyle = '#00fff8'
    contexto.fillRect(150, 0, 300, ALTURA)
    contexto.fillStyle = '#fff'
    contexto.fillRect(0, 0, 150, ALTURA)
    contexto.fillRect(450, 0, 150, ALTURA)
    player.desenha()
    obstaculo.desenha()
    texto.score()
}