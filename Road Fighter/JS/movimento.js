function clique(event){
}
function playerMover(event){
    if(event.keyCode === 37 || event.keyCode === 65){
        player.Esquerda()
    }else if(event.keyCode === 39 || event.keyCode === 68){
        player.Direita()
    }
}