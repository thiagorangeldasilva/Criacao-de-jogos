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
    record = localStorage.getItem("record")

    if(record == null){
        record = 0
    }
    
    imagem = new Image()
    imagem.src = "../Image/images.png"
    roda()
}