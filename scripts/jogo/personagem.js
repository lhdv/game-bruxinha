class Personagem  extends Animacao{
    constructor(mtzLin, mtzCol, imagem, x, largura, altura, largSprite, altSprite) {
        super(mtzLin, mtzCol, imagem, x, largura, altura, largSprite, altSprite);

        this.yInicial = height;
        this.y = this.yInicial;

        this.velocidadePulo = 0;
        this.gravidade = 3;
    }

    pula() {
        this.velocidadePulo = -30;
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadePulo;
        this.velocidadePulo = this.velocidadePulo + this.gravidade;

        if (this.y > this.yInicial) {
            this.y = this.yInicial;
        }
    }
}