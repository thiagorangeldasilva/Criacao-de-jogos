let obstaculo = {
    _obs: [],
    _score: false,
    cores: ["#ffbc1c", "#ff1c1c", "#ff85e1", "#52a7ff", "#78ff5d", "#000000"],
    tempoInsere: 0,
    insereMais: 0,
    _tempoinsere: 150,
    _gamerover: false,
    _insereMais: false,

    insere(){
        let xRandom = Math.floor(150 + Math.random() * 260)
        let yValide = 0
        if(this._obs.length > 0){
            for(let e in obstaculo._obs){
                xRandom = validareixoX(xRandom, this._obs[e])
                yValide = validareixoY(yValide, this._obs[e], xRandom)
            }
        }
        this._obs.push({
            x: xRandom,
            y: yValide,
            largura: Math.floor(25 + Math.random() * 15),
            altura: Math.floor(25 + Math.random() * 15),
            cor: this.cores[Math.floor(this.cores.length * Math.random())],
            _mudaposicao: Math.floor(150 + Math.random() * 260)
        })
        this.inserirMais = Math.floor(Math.random() * 1)
        if(this.inserirMais === 1 || this._insereMais){
            this.tempoInsere = Math.floor(5 + Math.random() * this._tempoinsere)
        }else if(this.inserirMais === 0 && !this._insereMais){
            this._insereMais = true
            setTimeout(() => {
                obstaculo._insereMais = false
            }, 2000)
            this.tempoInsere = 0
        }
    },

    condicaoIFcolindindo(indice){
        return condicao.eixoObstaculo(this._obs[indice], 'abaixo') > condicao.eixoPlayer(player, 'acima') && condicao.eixoObstaculo(this._obs[indice], 'acima') < condicao.eixoPlayer(player, 'abaixo') && condicao.eixoObstaculo(this._obs[indice], 'direita') < condicao.eixoPlayer(player, 'esquerda') && condicao.eixoObstaculo(this._obs[indice], 'esquerda') > condicao.eixoPlayer(player, 'direita')
    },

    atualiza(){
        if(velocidade > 5){
            if(this.tempoInsere === 0){
                this.insere()
            }else{
                this.tempoInsere--
            }
            this._tempoinsere = TempoInsere(velocidade)
        }
        
        for(let i = 0, tam = this._obs.length; i < tam; i++){
            let obs = this._obs[i]

            if(velocidade !== 0 && obs.cor !== "#78ff5d"){
                obs.y += velocidade
            }else if(velocidade !== 0 && obs.cor === "#78ff5d"){
                obs.y += velocidade*0.7
            }else if(velocidade === 0 && this._obs.length > 0){
                obs.y -= 3
            }

            obs.x = mudaPosicao(obs, "#78ff5d", obs._mudaposicao, Math.floor(Math.random() * 400 + 50))

            if(!player._score && velocidade > 3){
                player._score = true
                setTimeout(() => {
                    player._score = false
                }, 2000)
                player.score++
            }

            if(this.condicaoIFcolindindo(i) && obs.cor !== "#000000" || player.gasolina === 0){
                if(player.gasolina > 0){
                    player._atualiza = true
                    setTimeout(() => {
                        player._atualiza = false
                    }, 1000)
                    this._obs = []
                    tam = 0
                    i = 0
                    player.gasolina -= 7
                    velocidade = 0
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