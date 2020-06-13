function Sprite(x, y, largura, altura, img) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;
	this.img = img

	this.desenha = function(xCanvas, yCanvas) {
		contexto.drawImage(this.img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}

/*let bg = new Sprite(0, 0, 600, 600, imagem)
let	perdeu = new Sprite(603, 478, 397, 358, imagem)
let jogar = new Sprite(603, 127, 397, 347, imagem)
let novo = new Sprite(68, 721, 287, 93, imagem)
let spriteRecord = new Sprite(28, 879, 441, 95, imagem)
let spriteChao = new Sprite(0, 604, 600, 54, imagem)
*/let playerBloco = new Sprite(0, 0, 50, 50, imgGestrela)
