let progresso = {
    distancia: 150,
    _distancia: false,

    atualiza(){
        if(this.distancia > 0 && velocidade > 0){    
            if(!this._distancia){
                this._distancia = true
                setTimeout(() => {
                    progresso._distancia = false
                }, 250)
                this.distancia--
            }
        }
    },

    reset(){
        this.distancia = 150
    }
}