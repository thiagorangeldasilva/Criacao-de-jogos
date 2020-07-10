function clique(event){
    if(estadoAtual == estados.jogando){
        
    }else if(estadoAtual == estados.jogar){
        estadoAtual = estados.jogando
    }else if(estadoAtual == estados.perdeu){
        player.reset()
        obstaculo.reset()
        estadoAtual = estados.jogar   
    }
}
function playerMover(event){
    switch(event.keyCode){
        case 37: case 65:
            player.passoEsquerda = true
            break
        case 39: case 68:
            player.passoDireita = true
            break
        case 38: case 87:
            player.acelera = true
            break
        case 40: case 83:
            player.desacelera = true
            break
    }
}
function playerParar(event){
    switch(event.keyCode){
        case 37: case 65:
            player.passoEsquerda = false
            break
        case 39: case 68:
            player.passoDireita = false
            break
        case 38: case 87:
            player.acelera = false
            break
        case 40: case 83:
            player.desacelera = false
            break
    }
}   