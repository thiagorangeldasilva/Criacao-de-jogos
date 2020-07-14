let obstaculo = {
    _obs: [],
    _score: false,
    cores: ["#ffbc1c", "#ff1c1c", "#ff85e1", "#52a7ff", "#78ff5d", "#000000"],
    tempoInsere: 0,
    insereMais: 0,
    _tempoinsere: 150,
    _gamerover: false,

    insere(){
        this._obs.push({
            x: Math.floor(150 + Math.random() * 260),
            y: 0,
            largura: Math.floor(25 + Math.random() * 15),
            altura: Math.floor(25 + Math.random() * 15),
            cor: "#78ff5d" /*this.cores[Math.floor(this.cores.length * Math.random())]*/,
            _mudaposicao: Math.floor(150 + Math.random() * 260)
        })
        this.tempoInsere = Math.floor(40 + Math.random() * this._tempoinsere)
    },

    condicaoIFcolindindo(indice){
        return condicao.eixoObstaculo(this._obs[indice], 'abaixo') > condicao.eixoPlayer(player, 'acima') && condicao.eixoObstaculo(this._obs[indice], 'acima') < condicao.eixoPlayer(player, 'abaixo') && condicao.eixoObstaculo(this._obs[indice], 'direita') < condicao.eixoPlayer(player, 'esquerda') && condicao.eixoObstaculo(this._obs[indice], 'esquerda') > condicao.eixoPlayer(player, 'direita')
    },

    atualiza(){
        if(velocidade > 5){
            if(this.tempoInsere === 0){
                this.insere()
                console.log(this._obs[0].x, this._obs[0]._mudaposicao)
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
            }else if(velocidade === 0 && this._obs.length > 0){
                obs.y -= 3
            }

            obs.x = mudaPosicao(obs, "#78ff5d", obs._mudaposicao)

            if(!player._score && velocidade > 3){
                player._score = true
                setTimeout(() => {
                    player._score = false
                }, 2000)
                player.score++
            }

            if(this.condicaoIFcolindindo(i) && obs.cor !== "#000000" || player.gasolina === 0){
                if(player.gasolina > 0){
                    this._obs = []
                    tam = 0
                    i = 0
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