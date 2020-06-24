class Personagem  extends Animacao{
    constructor(mtzLin, mtzCol, imagem, x, largura, altura, largSprite, altSprite, somPulo) {
        super(mtzLin, mtzCol, imagem, x, largura, altura, largSprite, altSprite);

        this.yInicial = height;
        this.y = this.yInicial;

        this.velocidadePulo = 0;
        this.gravidade = 3;

        this.puloDuplo = 0;
        this.somPulo = somPulo;
    }

    pula() {
        this.puloDuplo++;
        if (this.puloDuplo < 3) {
            this.velocidadePulo = -30;
            somPulo.play();
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
        /* Debug mode: desenha uma bordar para verificar colisao */
        /*        
        rectMode(CORNER); // Default rectMode is CORNER
        fill(255);
        rect(this.x, this.y, this.largura, this.altura);
        rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura);
        */
        const precisao = 0.7;
        const colisao = collideRectRect(
            this.x, this.y, this.largura * precisao, this.altura * precisao,
            inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);
        
        return colisao;
    }
}