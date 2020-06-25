let imagemCenario;
let imagemAbelha;
let imagemMoeda;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imageGameOver;

let somJogo;
let somPulo;
let somMoeda;
let somGameOver;

let cenario;
let npc;
let moeda;
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;
let pontuacao;

const inimigos = [];
let inimigoAtual = 0;

/**
 * Roda antes do setup, apenas uma vez
 */
function preload() {
  imagemCenario = loadImage('assets/imagens/cenario/floresta.png');
  imagemAbelha = loadImage('assets/imagens/cenario/bee.png');
  imagemMoeda = loadImage('assets/imagens/cenario/moeda_16x16.png');
  imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png');
  imagemInimigo = loadImage('assets/imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('assets/imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('assets/imagens/inimigos/gotinha-voadora.png');
  imageGameOver = loadImage('assets/imagens/assets/game-over.png');
  somJogo = loadSound('assets/sons/trilha_jogo.mp3');
  somPulo = loadSound('assets/sons/somPulo.mp3');
  somMoeda = loadSound('assets/sons/coin.mp3');
  somGameOver = loadSound('assets/sons/gameover.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);  

  pontuacao = new Pontuacao();

  cenario = new Cenario(imagemCenario, 5);
  
  npc = new NonPlayerCharacter(1, 1, 0, imagemAbelha, width - 39.8, 300, 39.8, 35.4, 398, 354, 9);
  moeda = new Item(1, 8, 0, imagemMoeda, width - 32, 200, 32, 32, 16, 16, 9, somMoeda);
  
  const inimigo =  new Inimigo(7, 4, 0, imagemInimigo, width, 20, 52, 52, 104, 104, 8, 10);
  const inimigoVoador = new Inimigo(6, 3, 2, imagemInimigoVoador, width, 200, 100, 75, 200, 150, 6, 10);
  const inimigoGrande = new Inimigo(6, 5, 2, imagemInimigoGrande, width, 0, 150, 150, 400, 400, 6, 10);

  inimigos.push(inimigo);
  inimigos.push(inimigoVoador);
  inimigos.push(inimigoGrande);
  
  personagem = new Personagem(4, 4, 0, imagemPersonagem, 0, 20, 110, 135, 220, 270, somPulo);
  
  frameRate(40);
  somJogo.loop();
  somJogo.setVolume(0.2);
}

/*
 * Manipula input do jogador
 */
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
  
  const inimigo = inimigos[inimigoAtual];
  const inimigoVisivel = inimigo.x < (- inimigo.largura);

  cenario.exibe(); 
  cenario.move();

  pontuacao.exibe();
  pontuacao.adicionaPonto();
  
  // npc.exibe();
  // npc.move();

  moeda.exibe();
  moeda.move();

  personagem.exibe();
  personagem.aplicaGravidade();
  
  inimigo.exibe();
  inimigo.move();

  if (inimigoVisivel) {
    inimigoAtual++;
    if (inimigoAtual > inimigos.length -1) {
      inimigoAtual = 0;
    }
    inimigo.velocidade = parseInt(random(5,15));    
  }

  if (personagem.estaColidindo(inimigo)) {
    somJogo.setVolume(0, 0.4);
    noLoop();
    image(imageGameOver, (width / 2) - (imageGameOver.width / 2), height / 2);
    somGameOver.play();
    somGameOver.setVolume(0.5)
  }

  if (personagem.estaColidindo(moeda)) {
    moeda.tocaSom();
    moeda.x = width * 2;
    pontuacao.adicionaMoeda();
  }

}
