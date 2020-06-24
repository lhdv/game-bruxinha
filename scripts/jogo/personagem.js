class Personagem {
    constructor(imagem) {
        this.imagem = imagem;
        
        this.frames = 16;
        this.frameAtual = 0;        

        this.width = 220;
        this.height = 270;

        this.drawCanvasWidth = this.width / 2;
        this.drawCanvasHeight = this.height / 2;

        this.m = this.buildMatriz(4, 4);
    }

    exibe() {
        image(this.imagem, 
            0, height - this.drawCanvasHeight, 
            this.drawCanvasWidth, this.drawCanvasHeight, 
            this.getMatrizX(this.m, this.frameAtual), this.getMatrizY(this.m, this.frameAtual),
            this.width, this.height);
        this.anima();
    }

    anima() {        
        this.frameAtual++;
        if (this.frameAtual >= this.frames - 1) {
            this.frameAtual = 0;
        }
    }

    buildMatriz(c, l) {
        let matriz = [];
        for(let line = 0; line < l; line++) {
            for(let column = 0; column < c; column++) {
                let positionX = column * this.width;
                let positionY = line * this.height;
                matriz.push([positionX, positionY]);
            }
        }      

        return matriz;
    }

    getMatrizX(matriz, el) {
        return matriz[el][0];
    }
    getMatrizY(matriz, el) {
        return matriz[el][1];
    }
}