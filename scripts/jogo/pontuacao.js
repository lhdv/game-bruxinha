class Pontuacao {
    constructor() {
        this.pontos = 0;
        this.fator = 0.2;
    }

    exibe() {
        fill('#fff');
        textAlign(RIGHT);
        textSize(50);
        text(parseInt(this.pontos), width - 50, 50);
    }

    adicionaPonto() {
        this.pontos += this.fator;
    }

    adicionaMoeda() {
        this.pontos += (this.fator * 10);
    }
}