class Inimigo extends Animacao {
    constructor(mtzLin, mtzCol, mtzTrim, imagem, x, variacaoY, largura, altura, largSprite, altSprite, velocidade, delay) {
        super(mtzLin, mtzCol, mtzTrim, imagem, x, variacaoY, largura, altura, largSprite, altSprite);

        this.velocidade = velocidade;
        this.delay = delay;    
    }    

    move() {
        this.x = this.x - this.velocidade;
        if (this.x < -this.largura - this.delay) {
            this.x = width;
        }
    }
}