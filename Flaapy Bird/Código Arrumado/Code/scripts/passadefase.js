function passardeFase(){
    faseAtual++
    if(bloco.score % 10 === 0){
        bloco.vidas++
    }
    obstaculo.alturaObsRandom += 5
    obstaculo.espacoObsRandom += 25
    obstaculo.distanciaTempoInsere -= 25
}