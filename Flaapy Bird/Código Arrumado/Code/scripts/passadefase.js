function passardeFase(){
    faseAtual++
    if(bloco.score % 10 == 0){
        bloco.vidas++
    }
    obstaculo.alturaObsRandom += 25
    obstaculo.espacoObsRandom -= 25
    obstaculo.distanciaTempoInsere += 5
}