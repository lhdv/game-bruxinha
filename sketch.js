let imagemCenario;
let imagemPersonagem;
let somDoJogo;

let cenario;
let personagem;

/**
 * Roda ante s do setup apenas uma vez
 */
function preload() {
  imagemCenario = loadImage('assets/imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png');
  somDoJogo = loadSound('assets/sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);  
  cenario = new Cenario(imagemCenario, 2);
  personagem = new Personagem(imagemPersonagem);
  frameRate(30);
  somDoJogo.loop();
}
  
function draw() {
  /*background(220);*/
  /*circle(mouseX, mouseY, 100);*/
  cenario.exibe(); 
  cenario.move();
  personagem.exibe();
}
