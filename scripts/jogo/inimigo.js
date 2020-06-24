class Inimigo extends Animacao {
    constructor(mtzLin, mtzCol, imagem, x, variacaoY, largura, altura, largSprite, altSprite) {
        super(mtzLin, mtzCol, imagem, x, variacaoY, largura, altura, largSprite, altSprite);

        this.velocidade = 8;    
    }    

    move() {
        this.x = this.x - this.velocidade;
        if (this.x < -this.largura) {
            this.x = width;
        }
    }
}