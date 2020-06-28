function Sprite(x, y, largura, altura, img) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;
	this.img = img

	this.desenha = function(xCanvas, yCanvas) {
		contexto.drawImage(imagem, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}

let bg = new Sprite(0, 0, 600, 600)
let spriteChao = new Sprite(0, 610, 600, 50)
let playerBloco = new Sprite(625, 0, 49, 49)
let playerPerdeu = new Sprite(753, 253, 250, 250)
let playJogo = new Sprite(605, 653, 395, 347)