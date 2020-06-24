let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let somJogo;
let somPulo;

let cenario;
let personagem;
let inimigo;

/**
 * Roda antes do setup, apenas uma vez
 */
function preload() {
  imagemCenario = loadImage('assets/imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png');
  imagemInimigo = loadImage('assets/imagens/inimigos/gotinha.png');
  somJogo = loadSound('assets/sons/trilha_jogo.mp3');
  somPulo = loadSound('assets/sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);  
  cenario = new Cenario(imagemCenario, 5);
  //personagem = new Personagem(imagemPersonagem);
  personagem = new Personagem(4, 4, imagemPersonagem, 0, 110, 135, 220, 270);
  inimigo = new Inimigo(7, 4, imagemInimigo, width - 52, 52, 52, 104, 104);
  frameRate(30);
  somJogo.loop();
  somJogo.setVolume(0.2);
}

function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pula();
    somPulo.play();
  }
}
 
function keyTyped() {
  if (key === ' ') {
    personagem.pula();
    somPulo.play();
  }
}

function draw() {
  
  /* Codigo de Teste */
  /*background(220);*/
  /*circle(mouseX, mouseY, 100);*/
  
  cenario.exibe(); 
  cenario.move();
  personagem.exibe();
  personagem.aplicaGravidade();
  inimigo.exibe();
  inimigo.move();

  if (personagem.estaColidindo(inimigo)) {
    console.log('bateu');
    somJogo.stop();
    noLoop();
  }
}
