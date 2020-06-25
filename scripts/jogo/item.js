class Item extends Animacao {
    constructor(mtzLin, mtzCol, mtzTrim, imagem, x, variacaoY, largura, altura, largSprite, altSprite, velocidade, sfx) {
        super(mtzLin, mtzCol, mtzTrim, imagem, x, variacaoY, largura, altura, largSprite, altSprite);

        this.velocidade = velocidade;
        this.sfx = sfx;
    }

    move() {
        this.x = this.x - this.velocidade;
        if (this.x < -this.largura) {
            this.x = width;
        }
    }

    tocaSom() {
        this.sfx.play();
    }
}