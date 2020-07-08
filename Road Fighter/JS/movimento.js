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
    if(event.keyCode == 37 || event.keyCode == 65){
        player.passoEsquerda = true
    }
    if(event.keyCode == 39 || event.keyCode == 68){
        player.passoDireita = true       
    }
    if(event.keyCode == 38 || event.keyCode == 87){
        player.acelera = true
    }
    if(event.keyCode == 40 || event.keyCode == 83){
        player.desacelera = true
    }
}
function playerParar(event){
    if(event.keyCode == 37 || event.keyCode == 65){
        player.passoEsquerda = false
    }
    if(event.keyCode == 39 || event.keyCode == 68){
        player.passoDireita = false        
    }
    if(event.keyCode == 38 || event.keyCode == 87){
        player.acelera = false
    }
    if(event.keyCode == 40 || event.keyCode == 83){
        player.desacelera = false
    }
}   