class Inimigo extends Animacao {
    constructor(mtzLin, mtzCol, imagem, x, largura, altura, altSprite, largSprite) {
        super(mtzLin, mtzCol, imagem, x, largura, altura, altSprite, largSprite);

        this.velocidade = 8;
    }    

    move() {
        this.x = this.x - this.velocidade;
        if (this.x < -this.largura) {
            this.x = width;
        }
    }
}