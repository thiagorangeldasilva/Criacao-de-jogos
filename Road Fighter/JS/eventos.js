function addEventos(){
    document.addEventListener('keydown', playerMover)
    document.addEventListener('keyup', playerParar)
    document.addEventListener('mousedown', clique)
}

const condicao = {
    eixoYOBSacima(indice){return obstaculo._obs[indice].y},
    eixoYOBSabaixo(indice){return obstaculo._obs[indice].altura + obstaculo._obs[indice].y},
    eixoXOBSdireita(indice){return obstaculo._obs[indice].x},
    eixoXOBSesquerda(indice){return obstaculo._obs[indice].x + obstaculo._obs[indice].largura},
    eixoYPLAYERacima(){return player.y},
    eixoYPLAYERabaixo(){return player.y + player.altura},
    eixoXPLAYERdireita(){return player.x - player.largura / 2},
    eixoXPLAYEResquerda(){return player.x + player.largura / 2}
}