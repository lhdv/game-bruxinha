/**
 * Roda antes do setup, apenas uma vez
 */
function preload() {
  loadAssets();
}

function setup() {
  createCanvas(windowWidth, windowHeight);  

  jogo.setup();
  frameRate(40);

  cenas = {
    jogo: jogo,
    telaInicial: telaInicial
  };

  btnGerenciador = new BotaoGerenciador("Iniciar", width / 2, height / 2);
}

/*
 * Manipula input do jogador
 */
function keyPressed() {
  jogo.keyPressed(key);
}
 
function keyTyped() {
  jogo.keyPressed(key);
}

function mouseClicked(event) {
  jogo.mouseClicked(event);
}

function draw() {
  
  /* Codigo de Teste */
  /*background(220);*/
  /*circle(mouseX, mouseY, 100);*/

  cenas[cenaAtual].draw();
}
