let player = {
    y: 475,
    x: 300,
    altura: 25,
    largura: 25,
    cor: '#F00',
    passo: 6.25,
    passoEsquerda: false,
    passoDireita: false,
    acelera: false,
    desacelera: false,
    colidindo: false,
    gasolina: 1000,
    score: 0,
    _temporizador: false,

    atualiza(){
        if(estadoAtual == estados.jogando){
            if(this.passoDireita && this.x + this.passo <=   (LARGURA - 150) - this.largura / 2){
                this.x += this.passo
            }
            if(this.passoEsquerda && this.x + this.passo >= 150 + this.largura){
                this.x -= this.passo
            }
            if(this.acelera){
                if(velocidade <= 8){
                    velocidade++
                }
            }else{
                if(velocidade > 0){
                    velocidade--
                }
            } 
            if(this.desacelera){
                if(velocidade > 0){
                    velocidade -= 2
                }
            }
        }
    },

    reset(){
        this.score = 0
        this.gasolina = 1000
        this.x = 300
    },

    desenha(){
        contexto.fillStyle = this.cor
        contexto.fillRect(this.x - (this.largura / 2), this.y, this.largura, this.altura) 
    }
}

let obstaculo = {
    _obs: [],
    _score: false,
    cores: ["#ffbc1c", "#ff1c1c", "#ff85e1", "#52a7ff", "#78ff5d"],
    tempoInsere: 0,

    insere(){
        this._obs.push({
            x: Math.floor(150 + Math.random() * 260),
            y: 0,
            largura: Math.floor(25 + Math.random() * 15),
            altura: Math.floor(25 + Math.random() * 15),
            cor: this.cores[Math.floor(this.cores.length * Math.random())]
        })
        this.tempoInsere = Math.floor(30 + Math.random() * 150)
    },

    condicaoIFcolindindo(indice){
        return this._obs[indice].altura + this._obs[indice].y > player.y && this._obs[indice].x < player.x + player.largura / 2 && this._obs[indice].x + this._obs[indice].largura > player.x - player.largura / 2 && player.altura + this._obs[indice].y < player.y + player.altura
    },

    atualiza(){
        if(velocidade !== 0){
            if(this.tempoInsere === 0){
                this.insere()
            }else{
                this.tempoInsere--
            }
        }

        for(let i = 0, tam = this._obs.length; i < tam; i++){
            let obs = this._obs[i]
            obs.y += velocidade
            if(!player._temporizador && velocidade !== 0){
                player._temporizador = true
                setTimeout(() => {
                    player._temporizador = false
                }, 2000)
                player.score++
                player.gasolina--
            }
            if(this.condicaoIFcolindindo(i)){
                estadoAtual = estados.perdeu
            }else if(obs.y >= ALTURA){
                this._obs.splice(i, 1)
                tam--
                i--
            }
        }
    },

    reset(){
        this._obs = []
    },

    desenha(){
        for(let i = 0, tam = this._obs.length; i < tam; i++){
            let obs = this._obs[i]
            contexto.fillStyle = obs.cor
            contexto.fillRect(obs.x, obs.y, obs.largura, obs.altura)
        }
    }
}

let texto = {
    score(){
        contexto.fillStyle ="#000"
        contexto.font = "15px Verdana"
        contexto.fillText(`Velocidade ${velocidade}`, 450, 400)
        contexto.fillText(`Score ${player.score}`, 450, 300)
        contexto.fillText(`Gasolina ${player.gasolina}`, 450, 200)
    }
}