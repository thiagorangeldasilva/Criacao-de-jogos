function main(){
    ALTURA = window.innerHeight
    LARGURA = window.innerWidth

    if (LARGURA >= 500) {
        LARGURA = 600;
        ALTURA = 600;
    }

    canvas = new configCanvas()

    contexto = canvas.create.getContext("2d")
    document.body.appendChild(canvas.create)

    document.addEventListener("mousedown", clique)
    
    estadoAtual = estados.jogar
    
    imagem = new Image()
    imgEstrela = new Image()
    imgGamerover = new Image()
    imgFundo = new Image()
    imagem.src = "../Image/sheet.png"
    imgEstrela.src = "../Image/estrela.png"
    imgGamerover.src = "../Image/gamer-over.png"
    imgFundo.src = "../Image/fundo.png"
    roda()
}