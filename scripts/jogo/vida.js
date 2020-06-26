class Vida {
    constructor(total, inicial) {
        this.total = total;
        this.inicial = inicial;

        this.vidas = this.inicial;
        this.altura = 30;
        this.largura = 30;
        this.xInicial = 20;
        this.yInicial = 20;
    }

    draw()  {
        for (let i = 0; i < this.vidas; i++) {
            const margem = i * 20;
            const posicao = this.xInicial * (i  + 1);

            image(imagemVida, margem + posicao, this.yInicial, this.altura, this.largura);
        }
    }

    ganhaVida() {
        if (this.vidas <= this.total) {
            this.vidas++;
        }
    }

    perdeVida() {
        this.vidas--;
    }
}