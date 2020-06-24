class Animacao {
    constructor(mtzLin, mtzCol, imagem, x, largura, altura, altSprite, largSprite) {
        this.imagem = imagem;
        
        /* Posicao da imagem na tela */
        this.x = x;
        this.y = height;

        /* Largura/Altura da imagem final */
        this.largura = largura;
        this.altura = altura;

        /* Largura/Altura do sprite dentro da imagem */
        this.altSprite = altSprite;
        this.largSprite = largSprite;

        /* Qtde de linhas/colunas de sprites na imagem */
        this.mtzLin = mtzLin;
        this.mtzCol = mtzCol;

        /* Qtde de frames de animacao na imagem */
        this.frames = this.mtzLin * this.mtzCol;

        this.frameAtual = 0;
    }

    exibe() {
        matriz = this.buildMatriz(this.mtzCol, this.mtzLin);
        image(this.imagem, 
            this.x, this.y - this.altura, 
            this.largura, this.altura, 
            this.getMatrizX(matriz, this.frameAtual), this.getMatrizY(matriz, this.frameAtual),
            this.largSprite, this.altSprite);
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
                let positionX = column * this.largSprite;
                let positionY = line * this.altSprite;
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