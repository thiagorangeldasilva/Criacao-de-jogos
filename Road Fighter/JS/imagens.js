function Imagem(x, y, largura, altura){
    this.x = x
    this.y = y
    this.largura = largura
    this.altura = altura

    this.desenha = function(xCanvas, yCanvas){
        contexto.drawImage(imagem, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura)
    }
}

let ImgChao = new Imagem(0, 0, 300, 600) 