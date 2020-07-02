function roda(){
    atualiza()
    desenha()

    window.requestAnimationFrame(roda)
}