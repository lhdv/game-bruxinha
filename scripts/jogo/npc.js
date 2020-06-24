class NonPlayerCharacter extends Animacao {
    constructor(mtzLin, mtzCol, imagem, x, variacaoY, largura, altura, largSprite, altSprite, velocidade) {
        super(mtzLin, mtzCol, imagem, x, variacaoY, largura, altura, largSprite, altSprite);

        this.velocidade = velocidade;
    }    

    move() {
        this.x = this.x - this.velocidade;
        if (this.x < -this.largura) {
            this.x = width;
        }
    }
}