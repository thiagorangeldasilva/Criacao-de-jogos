let texto = {
    score(){
        contexto.fillStyle ="#000"
        contexto.font = "15px Verdana"
        contexto.fillText(`Velocidade ${Math.floor(velocidade)}`, 450, 400)
        contexto.fillText(`Score ${player.score}`, 450, 300)
        contexto.fillText(`Gasolina ${player.gasolina.toFixed(1).toString().replace('.', ',')}`, 450, 200)   
        contexto.fillText(`Distancia ${Math.floor(progresso.distancia)}`, 450, 100)      
    },

    jogar(){
        contexto.fillStyle ="#000"
        contexto.font = "15px Verdana"
        contexto.fillText(`Clique ou pressione o Espaço para começar`, 150, 300)
    }
}