class Inimigo extends Animacao {
    constructor(mtzLin, mtzCol, mtzTrim, imagem, x, variacaoY, largura, altura, largSprite, altSprite, velocidade) {
        super(mtzLin, mtzCol, mtzTrim, imagem, x, variacaoY, largura, altura, largSprite, altSprite);

        this.velocidade = velocidade;
    }    

    move() {
        this.x = this.x - this.velocidade;
    }
    
    aparece() {
        this.x = width;
    }
}