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

function Player(x, y, largura, altura, img) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;
	this.img = img

	this.desenha = function(xCanvas, yCanvas) {
		contexto.drawImage(imgEstrela, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}

function Perdeu(x, y, largura, altura, img) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;
	this.img = img

	this.desenha = function(xCanvas, yCanvas) {
		contexto.drawImage(imgGamerover, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}

function Fundo(x, y, largura, altura, img) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;
	this.img = img

	this.desenha = function(xCanvas, yCanvas) {
		contexto.drawImage(imgFundo, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}

let spriteChao = new Sprite(0, 604, 600, 54)
let playerBloco = new Player(0, 0, 50, 50)
let playerPerdeu = new Perdeu(0, 0, 300, 300)
let bg = new Fundo(0, 0, 600, 550)