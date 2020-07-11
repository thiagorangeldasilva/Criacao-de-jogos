let player = {
    y: 475,
    x: 300,
    altura: 25,
    largura: 25,
    cor: '#F00',
    passo: 6.25,
    gasolina: 100,
    score: 0,
    passoEsquerda: false,
    passoDireita: false,
    acelera: false,
    desacelera: false,
    colidindo: false,    
    _score: false,
    _gasolina: false,
    _bonus: false,
    _atualiza: false,

    atualiza(){
        if(estadoAtual == estados.jogando){
            if(this.passoDireita && this.x + this.passo <= (LARGURA - 150) - this.largura / 2){
                this.x += this.passo
            }
            if(this.passoEsquerda && this.x + this.passo >= 150 + this.largura){
                this.x -= this.passo
            }
            if(this.acelera){
                if(velocidade <= 20){
                    velocidade += 0.1
                }
            }else{
                if(velocidade > 0){
                    velocidade -= 0.1
                }
            } 
            if(this.desacelera){
                if(velocidade > 0 && velocidade - 0.5 > 0){
                    velocidade -= 0.5
                }else if(velocidade > 0){
                    velocidade -= 0.1
                }   
            }
            if(!this._gasolina){
                this._gasolina = true
                setTimeout(() => {
                    player._gasolina = false
                }, 1000)
                if(player.gasolina > 0){
                    if(velocidade === 0){
                        this.gasolina -= 1
                    }else if(velocidade <= 10){
                        this.gasolina -= 2
                    }else{
                        this.gasolina -= 2.5
                    }
                }
            }
        }
    },

    reset(){
        this.score = 0
        this.gasolina = 100
        this.x = 300
        velocidade = 0
    },

    desenha(){
        contexto.fillStyle = this.cor
        contexto.fillRect(this.x - (this.largura / 2), this.y, this.largura, this.altura) 
    }
}