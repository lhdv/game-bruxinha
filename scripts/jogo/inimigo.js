class Inimigo extends Animacao {
    constructor(mtzLin, mtzCol, imagem, x, largura, altura, altSprite, largSprite) {
        super(mtzLin, mtzCol, imagem, x, largura, altura, altSprite, largSprite);
    }    

    move() {
        this.x = this.x - 8;
        if (this.x < -this.largura) {
            this.x = width;
        }
    }
}