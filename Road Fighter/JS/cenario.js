let player = {
    y: 475,
    x: 300,
    altura: 25,
    largura: 25,
    cor: '#F00',
    passo: 8,
    passoEsquerda: false,
    passoDireita: false,

    atualiza(){
        if(this.passoDireita){
            this.x += this.passo
        }
        if(this.passoEsquerda){
            this.x -= this.passo
        }
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
            x: Math.floor(Math.random() * LARGURA),
            y: 0,
            largura: Math.floor(10 + Math.random() * 15),
            altura: Math.floor(10 + Math.random() * 15),
            cor: this.cores[Math.floor(this.cores.length * Math.random())]
        })
        this.tempoInsere = Math.floor(30 + Math.random() * 50)
    },

    atualiza(){
        if(this.tempoInsere === 0){
            this.insere()
        }else{
            this.tempoInsere--
        }

        for(let i = 0, tam = this._obs.length; i < tam; i++){
            let obs = this._obs[i]
            obs.y += velocidade
            if(obs.x <= -obs.largura){
                this._obs.splice(i, 1)
                tam--
                i--
            }
        }
    },

    desenha(){
        for(let i = 0, tam = this._obs.length; i < tam; i++){
            let obs = this._obs[i]
            contexto.fillStyle = obs.cor
            contexto.fillRect(obs.x, obs.y, obs.largura, obs.altura)
        }
    }
}