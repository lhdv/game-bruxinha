class NonPlayerCharacter extends Animacao {
    constructor(mtzLin, mtzCol, imagem, x, largura, altura, largSprite, altSprite, y, velocidade) {
        super(mtzLin, mtzCol, imagem, x, largura, altura, largSprite, altSprite);

        this.velocidade = velocidade;
        this.y = this.y - y;      
    }    

    move() {
        this.x = this.x - this.velocidade;
        if (this.x < -this.largura) {
            this.x = width;
        }
    }
}