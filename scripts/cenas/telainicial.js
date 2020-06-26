class TelaInicial {
    constructor() {

    }

    draw() {
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }
    
    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {
        textAlign(CENTER);
        textSize(50);
        textFont(fonteTelaInicial);
        text('As Aventuras da', width / 2, (height / 6));
        textSize(100);
        text('Bruxinha', width / 2, ((height / 6) * 2));
    }

    _botao() {
        btnGerenciador.y = (height / 7) * 5;
        btnGerenciador.draw();
    }
}