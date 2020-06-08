const quantosNiveis = 15, MultiplicadorparapassarFase = 5
let canvas, contexto, frames = 0, estadoAtual, velocidade = 6, faseAtual = 1 
var LARGURA, ALTURA

let estados = {
    jogar: 0,
    jogando: 1,
    perdeu: 2
}

let chao = {
    y: 550,
    altura: 50,
    cor: '#ffdf70',
    
    desenha: function(){
        contexto.fillStyle = this.cor
        contexto.fillRect(0, this.y, LARGURA, this.altura)
    }
}

let bloco = {
    x: 50,
    y: chao.y / 2 - chao.altura / 2,
    altura: 40,
    largura: 40,
    cor: '#ff1e4e',
    gravidade: 0.2,
    velocidade: 0,
    forcaDoPulo: 5,
    score: 0,
    vidas: 3,
    colidindo: false,

    atualiza: function(){
        this.velocidade += this.gravidade
        this.y += this.velocidade

        if(this.y > chao.y - this.altura){
            this.y = chao.y - this.altura
        }else if(this.y < 0){
            this.y = 0
            this.velocidade = 0           
        }
    },

    pular: function(){
        this.velocidade = -this.forcaDoPulo
    },

    reset: function(){
        this.y = chao.y / 2 - chao.altura / 2,
        this.velocidade = 0
        this.score = 0
        this.vidas = 3
    },

    desenha: function(){
        contexto.fillStyle = this.cor
        contexto.fillRect(this.x, this.y, this.largura, this.altura)
    }
}

let obstaculos = {
    _obs: [],
    _scored: false,
    cores: ["#ffbc1c", "#ff1c1c", "#ff85e1", "#52a7ff", "#78ff5d"],
    tempoInsere: 0,
    alturaobsrandom: 280,
    espacoobsrandom: 250,

    insere: function(){
        this._obs.push({
            x: LARGURA,
            largura: Math.floor(30 + Math.random() * 20),
            altura: Math.floor(10 + Math.random() * this.alturaobsrandom),
            cor: this.cores[Math.floor(this.cores.length * Math.random())]
        })

        this.tempoInsere = Math.floor(40 + Math.random() * 20)
    },

    condicaoIfColisao: function(i) {
        return !bloco.colidindo && (bloco.x < this._obs[i].x + this._obs[i].largura && bloco.x + bloco.largura > this._obs[i].x && (bloco.y + bloco.altura >= chao.y - this._obs[i].altura || bloco.y <= chao.y - (this._obs[i].altura + this.espacoobsrandom)) || bloco.y == chao.y - bloco.altura || bloco.y == 0)
    },

    atualiza: function(){
        if(this.tempoInsere == 0){
            this.insere()
        }else{
            this.tempoInsere--
        }

        // mudança de nível, pontuação, velocidade, e a mudança de estados.perdeu  
        for(var i = 0, tam = this._obs.length; i < tam; i++){
            var obs = this._obs[i]
            obs.x -= velocidade

            if(this.condicaoIfColisao(i)){
                bloco.colidindo = true

                setTimeout(function(){
                    bloco.colidindo = false
                }, 700)

                if (bloco.vidas >= 1){
                    bloco.vidas--
                }else{
                    estadoAtual = estados.perdeu
                }

            }else if(obs.x + obs.largura < bloco.x && !obs._scored){
                bloco.score++
                obs._scored = true
                if(faseAtual < quantosNiveis && bloco.score == faseAtual * MultiplicadorparapassarFase){
                    passardeFase()
                }
            }else if(obs.x <= -obs.largura){
                this._obs.splice(i, 1)
                tam--
                i--
            }
        }
    },

    reset: function(){
        this._obs = []
        this.espacoobsrandom = 250
        this.alturaobsrandom = 280
    },

    desenha: function(){
        for (var i = 0, tam = this._obs.length; i < tam; i++){
            var obs = this._obs[i]
            contexto.fillStyle = obs.cor
            contexto.fillRect(obs.x, chao.y - obs.altura, obs.largura, obs.altura)
            contexto.fillRect(obs.x, 0, obs.largura, chao.y - (obs.altura + this.espacoobsrandom))
        }
    }
}

function roda(){
    atualiza()
    desenha()

    window.requestAnimationFrame(roda)
}

function atualiza(){
    frames++
    obstaculos.atualiza()
    if (estadoAtual == estados.jogando){
        bloco.atualiza()
    }
}

function desenha(){
    contexto.fillStyle = '#69e0d8'
    contexto.fillRect(0, 0, LARGURA, ALTURA)

    chao.desenha()
    bloco.desenha()
    if(estadoAtual == estados.jogando){
        contexto.fillStyle ="#fff"
        contexto.font = "30px Arial"
        contexto.fillText(`Score ${bloco.score}`, 30, chao.altura / 1.1 + chao.y)
        contexto.fillText(`Vidas ${bloco.vidas}`, 30, chao.altura / 3 + chao.y)
        contexto.fillText(`Level ${faseAtual}`, 150, chao.altura / 1.1 + chao.y) 
        obstaculos.desenha()
    }
}

function clique(event){
    if(estadoAtual == estados.jogando){
        bloco.pular()
    }else if(estadoAtual == estados.jogar){
        estadoAtual = estados.jogando
        obstaculos.reset
    }else if(estadoAtual == estados.perdeu){
        estadoAtual = estados.jogar
        reset()
    }
    
}

function configCanvas(){
    canvas = document.createElement('canvas')
    canvas.width = LARGURA
    canvas.height = ALTURA
    canvas.style.border = '1px solid #000'
}

function passardeFase(){
    faseAtual++
   // velocidade += 6
    obstaculos.alturaobsrandom += 25
    obstaculos.espacoobsrandom -= 25
}

function reset(){
    velocidade = 3
    faseAtual = 1
    bloco.reset()
    obstaculos.reset()
}

function main (){
    ALTURA = window.innerHeight
    LARGURA = window.innerWidth

    if(LARGURA >= 1100){
        LARGURA = 1200
    }
    if(ALTURA >= 500){
        ALTURA = 600
    }
    
    configCanvas()

    contexto = canvas.getContext('2d')
    document.body.appendChild(canvas)
    document.addEventListener('mousedown', clique)
    
    estadoAtual = estados.jogar
    
    roda()
}