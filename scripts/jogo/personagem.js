class Personagem  extends Animacao{
    constructor(mtzLin, mtzCol, mtzTrim, imagem, x, variacaoY, largura, altura, largSprite, altSprite, somPulo) {
        super(mtzLin, mtzCol, mtzTrim, imagem, x, variacaoY, largura, altura, largSprite, altSprite);

        this.variacaoY = variacaoY;
        this.yInicial = height - this.altura - this.variacaoY;
        this.y = this.yInicial;

        this.velocidadePulo = 0;
        this.gravidade = 2.5;

        this.puloDuplo = 0;
        this.somPulo = somPulo;
    }

    pula() {
        if (this.puloDuplo < 2) {
            this.velocidadePulo = -30;
            somPulo.play();
            this.puloDuplo++;
        }
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadePulo;
        this.velocidadePulo = this.velocidadePulo + this.gravidade;

        if (this.y > this.yInicial) {
            this.y = this.yInicial;
            this.puloDuplo = 0;
        }
    }

    estaColidindo(inimigo) {
        const precisao = 0.7;
        const colisao = collideRectRect(
            this.x * (1 + precisao), this.y * (1 + precisao), 
            this.largura * precisao, this.altura * precisao,
            inimigo.x * (1 + precisao), inimigo.y * (1 + precisao), 
            inimigo.largura * precisao, inimigo.altura * precisao);
        
        return colisao;
    }
}