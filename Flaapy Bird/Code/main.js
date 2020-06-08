var canvas, contexto, LARGURA, ALTURA, contexto, frames = 0, estadoAtual, velocidade = 3

var estados = {
    jogar: 0,
    jogando: 1,
    perdeu: 2
}

var chao = {
    y: 575,
    altura: 25,
    cor: '#ffdf70',
    
    desenha: function(){
        contexto.fillStyle = this.cor
        contexto.fillRect(0, this.y, LARGURA, this.altura)
    }
}

var bloco = {
    x: 50,
    y: chao.y / 2 - chao.altura,
    altura: 40,
    largura: 40,
    cor: '#ff4e4e',
    gravidade: 0.5,
    velocidade: 0,
    forcaDoPulo: 10,

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

    desenha: function(){
        contexto.fillStyle = this.cor
        contexto.fillRect(this.x, this.y, this.largura, this.altura)
    }
}

var obstaculos = {
    _obs: [],
    cores: ["#ffbc1c", "#ff1c1c", "#ff85e1", "#52a7ff", "#78ff5d"],
    tempoInsere: 0,

    insere: function(){
        this._obs.push({
            x: LARGURA,
            largura: Math.floor(30 + Math.random() * 20),
            altura: Math.floor(10 + Math.random() * 350),
            cor: this.cores[Math.floor(this.cores.length * Math.random())]
        })

        this.tempoInsere = Math.floor(50 + Math.random() * 50)
    },

    atualiza: function(){
        if(this.tempoInsere == 0){
            this.insere()
        }else{
            this.tempoInsere--
        }

        for(var i = 0, tam = this._obs.length; i < tam; i++){
            var obs = this._obs[i]
            obs.x -= velocidade

            if(bloco.x < obs.x + obs.largura && bloco.x + bloco.largura >= obs.x && (bloco.y + bloco.altura >= chao.y - obs.altura || bloco.y <= chao.y - (obs.altura + 200)) ){
                estadoAtual = estados.perdeu
            }else if(obs.x <= -obs.largura){
                this._obs.splice(i, 1)
                tam--
                i--
            }
        }
    },

    limpar: function(){
        this._obs = []
    },

    desenha: function(){
        for (var i = 0, tam = this._obs.length; i < tam; i++){
            var obs = this._obs[i]
            contexto.fillStyle = obs.cor
            contexto.fillRect(obs.x, chao.y - obs.altura, obs.largura, obs.altura)
            contexto.fillRect(obs.x, 0, obs.largura, chao.y - (obs.altura + 200))
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
    }else if( estadoAtual == estados.perdeu){
        obstaculos.limpar()
    }
}

function desenha(){
    contexto.fillStyle = '#69e0d8'
    contexto.fillRect(0, 0, LARGURA, ALTURA)

    chao.desenha()
    bloco.desenha()
    if(estadoAtual == estados.jogando){
        obstaculos.desenha()
    }
}

function clique(event){
    if(estadoAtual == estados.jogando){
        bloco.pular()
    }else if(estadoAtual == estados.jogar){
        estadoAtual = estados.jogando
    }else if(estadoAtual == estados.perdeu){
        estadoAtual = estados.jogar
    }
    
}

function configCanvas(){
    canvas = document.createElement('canvas')
    canvas.width = LARGURA
    canvas.height = ALTURA
    canvas.style.border = '1px solid #000'
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