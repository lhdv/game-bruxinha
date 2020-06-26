function loadAssets() {
    imagemCenario = loadImage('assets/imagens/cenario/floresta.png');
    imagemAbelha = loadImage('assets/imagens/cenario/bee.png');
    imagemMoeda = loadImage('assets/imagens/cenario/moeda_16x16.png');
    imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png');
    imagemVida = loadImage('assets/imagens/assets/coracao.png');
    imagemInimigo = loadImage('assets/imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('assets/imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('assets/imagens/inimigos/gotinha-voadora.png');
    imagemTelaInicial = loadImage('assets/imagens/assets/telainicial.png');
    imageGameOver = loadImage('assets/imagens/assets/game-over.png');
    
    fonteTelaInicial = loadFont('assets/imagens/assets/fonteTelaInicial.otf')

    somJogo = loadSound('assets/sons/trilha_jogo.mp3');
    somPulo = loadSound('assets/sons/somPulo.mp3');
    somMoeda = loadSound('assets/sons/coin.mp3');
    somGameOver = loadSound('assets/sons/gameover.wav');

    telaInicial = new TelaInicial();
    jogo = new Jogo();    
}