function clique(event){
}
function playerMover(event){
    if(event.keyCode === 37 || event.keyCode === 65){
        player.passoEsquerda = true
    }
    if(event.keyCode === 39 || event.keyCode === 68){
        player.passoDireita = true       
    }
}
function playerParar(event){
    if(event.keyCode === 37 || event.keyCode === 65){
        player.passoEsquerda = false
    }
    if(event.keyCode === 39 || event.keyCode === 68){
        player.passoDireita = false        
    }
}   