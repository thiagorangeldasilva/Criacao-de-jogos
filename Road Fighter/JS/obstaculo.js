let obstaculo = {
    _obs: [],
    _score: false,
    cores: ["#ffbc1c", "#ff1c1c", "#ff85e1", "#52a7ff", "#78ff5d", "#000000"],
    tempoInsere: 0,
    _tempoinsere: 150,
    _gamerover: false,

    insere(){
        this._obs.push({
            x: Math.floor(150 + Math.random() * 260),
            y: 0,
            largura: Math.floor(25 + Math.random() * 15),
            altura: Math.floor(25 + Math.random() * 15),
            cor: this.cores[Math.floor(this.cores.length * Math.random())]
        })
        this.tempoInsere = Math.floor(30 + Math.random() * this._tempoinsere)
    },

    condicaoIFcolindindo(indice){
        return condicao.eixoYOBSabaixo(indice) > condicao.eixoYPLAYERacima() && condicao.eixoYOBSacima(indice) < condicao.eixoYPLAYERabaixo() && condicao.eixoXOBSdireita(indice) < condicao.eixoXPLAYEResquerda() && condicao.eixoXOBSesquerda(indice) > condicao.eixoXPLAYERdireita()
    },

    atualiza(){
        if(velocidade > 5){
            if(this.tempoInsere === 0){
                this.insere()
            }else{
                this.tempoInsere--
            }
            if(velocidade < 10){
                this._tempoinsere = 140
            }else if(velocidade < 15){
                this._tempoinsere = 130
            }else{
                this._tempoinsere = 120
            }
        }

        for(let i = 0, tam = this._obs.length; i < tam; i++){
            let obs = this._obs[i]
            if(velocidade !== 0){
                obs.y += velocidade
            }else{
                obs.y -= 3
            }
            
            if(!player._score && velocidade > 3){
                player._score = true
                setTimeout(() => {
                    player._score = false
                }, 2000)
                player.score++
            }
            if(this.condicaoIFcolindindo(i) && obs.cor !== "#000000" /*|| player.x + player.passo <= (LARGURA - 150) - player.largura / 2 || player.x + player.passo >= 150 + player.largura */|| player.gasolina === 0){
                if(player.gasolina > 0){
                    obstaculo._obs = []
                    player.gasolina -= 7
                    velocidade = 0
                    player._atualiza = true
                    setTimeout(() => {
                        player._atualiza = false
                    }, 1000)
                }else{
                    estadoAtual = estados.perdeu
                }
            }else if(this.condicaoIFcolindindo(i) && obs.cor === "#000000"){
                player.score += 10
                player.gasolina += 5
                this._obs.splice(i, 1)
                tam--
                i--
            }else if(obs.y < 0 || obs.y >= ALTURA){
                this._obs.splice(i, 1)
                tam--
                i--
            }
        }
    },

    reset(){
        this._obs = [],
        this._tempoinsere = 150
    },

    desenha(){
        for(let i = 0, tam = this._obs.length; i < tam; i++){
            let obs = this._obs[i]
            contexto.fillStyle = obs.cor
            contexto.fillRect(obs.x, obs.y, obs.largura, obs.altura)
        }
    }
}
