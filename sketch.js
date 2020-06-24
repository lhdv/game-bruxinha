let imagemCenario;
let imagemAbelha;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imageGameOver;
let somJogo;
let somPulo;

let cenario;
let personagem;
let inimigo;
let inimigoGrande;

/**
 * Roda antes do setup, apenas uma vez
 */
function preload() {
  imagemCenario = loadImage('assets/imagens/cenario/floresta.png');
  imagemAbelha = loadImage('assets/imagens/cenario/bee.png');
  imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png');
  imagemInimigo = loadImage('assets/imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('assets/imagens/inimigos/troll.png');
  imageGameOver = loadImage('assets/imagens/assets/game-over.png');
  somJogo = loadSound('assets/sons/trilha_jogo.mp3');
  somPulo = loadSound('assets/sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);  
  cenario = new Cenario(imagemCenario, 5);
  
  npc = new NonPlayerCharacter(1, 1, imagemAbelha, width - 39.8, 250, 39.8, 35.4, 398, 354, 9);
  
  inimigo = new Inimigo(7, 4, imagemInimigo, width, 20, 52, 52, 104, 104, 8, 10);
  inimigoGrande = new Inimigo(5, 6, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 6, 20);
  
  personagem = new Personagem(4, 4, imagemPersonagem, 0, 20, 110, 135, 220, 270, somPulo);
  
  frameRate(30);
  somJogo.loop();
  somJogo.setVolume(0.2);
}

function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pula();
  }
}
 
function keyTyped() {
  if (key === ' ') {
    personagem.pula();
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

  inimigoGrande.exibe();
  inimigoGrande.move();

  npc.exibe();
  npc.move();

  if (personagem.estaColidindo(inimigo) || personagem.estaColidindo(inimigoGrande)) {
    somJogo.setVolume(0, 0.4);
    noLoop();
    image(imageGameOver, (width / 2) - (imageGameOver.width / 2), height / 2);
  }
}
