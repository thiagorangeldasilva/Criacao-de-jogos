function main(){

        LARGURA = innerWidth
        ALTURA = innerWidth

        if(LARGURA > 500 || ALTURA > 500){
            LARGURA = 600
            ALTURA = 600
        }

        canvas = new configCanvas()

        contexto = canvas.create.getContext("2d")
        document.body.appendChild(canvas.create)

        addEventos()

        roda()
    }
main()