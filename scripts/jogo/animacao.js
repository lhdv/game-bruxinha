class Animacao {
    constructor(mtzLin, mtzCol, imagem, x, largura, altura, largSprite, altSprite) {
        this.imagem = imagem;
        
        /* Largura/Altura da imagem final */
        this.largura = largura;
        this.altura = altura;

        /* Posicao da imagem na tela */
        this.x = x;
        this.y = height - this.altura;

        /* Largura/Altura do sprite dentro da imagem */
        this.altSprite = altSprite;
        this.largSprite = largSprite;

        /* Qtde de linhas/colunas de sprites na imagem */
        this.mtzLin = mtzLin;
        this.mtzCol = mtzCol;

        /* Qtde de frames de animacao na imagem */
        this.frames = this.mtzLin * this.mtzCol;

        this.frameAtual = 0;

        this.matriz = this.buildMatriz(this.mtzCol, this.mtzLin);
    }

    exibe() {
        image(this.imagem, 
            this.x, this.y, 
            this.largura, this.altura, 
            this.getMatrizX(this.matriz, this.frameAtual), this.getMatrizY(this.matriz, this.frameAtual),
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