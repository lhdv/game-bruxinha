let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let somDoJogo;

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
  somDoJogo = loadSound('assets/sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);  
  cenario = new Cenario(imagemCenario, 5);
  personagem = new Personagem(imagemPersonagem);
  inimigo = new Inimigo(7, 4, imagemInimigo, width - 52, 52, 52, 104, 104);
  frameRate(30);
  somDoJogo.loop();
}
  
function draw() {
  
  /* Codigo de Teste */
  /*background(220);*/
  /*circle(mouseX, mouseY, 100);*/
  
  cenario.exibe(); 
  cenario.move();
  personagem.exibe();
  inimigo.exibe();
  inimigo.move();
}
