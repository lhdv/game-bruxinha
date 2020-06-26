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

function draw() {
  
  /* Codigo de Teste */
  /*background(220);*/
  /*circle(mouseX, mouseY, 100);*/

  cenas[cenaAtual].draw();
}
