class Jogo {
    constructor() {
        this.indice = 0;
        this.mapa = [
          {
            inimigo: 0,
            velocidade: 10
          },
          {
            inimigo: 2,
            velocidade: 30
          },
          {
            inimigo: 2,
            velocidade: 20
          },
          {
            inimigo: 1,
            velocidade: 40
          }
        ];
    }

    setup() {
      cenario = new Cenario(imagemCenario, 5);
      pontuacao = new Pontuacao();
      vida = new Vida(3, 3);

      npc = new NonPlayerCharacter(1, 1, 0, imagemAbelha, width - 39.8, 300, 39.8, 35.4, 398, 354, 9);
      moeda = new Item(1, 8, 0, imagemMoeda, width - 32, 200, 32, 32, 16, 16, 9, somMoeda);

      const inimigo = new Inimigo(7, 4, 0, imagemInimigo, width, 20, 52, 52, 104, 104, 8);
      const inimigoVoador = new Inimigo(6, 3, 2, imagemInimigoVoador, width, 200, 100, 75, 200, 150, 6);
      const inimigoGrande = new Inimigo(6, 5, 2, imagemInimigoGrande, width, 0, 150, 150, 400, 400, 6);

      inimigos.push(inimigo);
      inimigos.push(inimigoVoador);
      inimigos.push(inimigoGrande);

      personagem = new Personagem(4, 4, 0, imagemPersonagem, 0, 20, 110, 135, 220, 270, somPulo);
    }

    keyPressed(key) {
        if (key === 'ArrowUp' || key === ' ') {
            personagem.pula();
        }
    }

    mouseClicked(event) {
      personagem.pula();
    }

    start() {
        somJogo.loop();
        somJogo.setVolume(0.2);
    }

    draw() {
      const linhaAtual = this.mapa[this.indice];
      const inimigo = inimigos[linhaAtual.inimigo];
      const inimigoVisivel = inimigo.x < (- inimigo.largura);

      cenario.exibe();
      cenario.move();

      vida.draw();

      pontuacao.exibe();
      pontuacao.adicionaPonto();

      // npc.exibe();
      // npc.move();

      moeda.exibe();
      moeda.move();

      personagem.exibe();
      personagem.aplicaGravidade();

      inimigo.velocidade = linhaAtual.velocidade;
      inimigo.exibe();
      inimigo.move();

      if (inimigoVisivel) {
        this.indice++;
        inimigo.aparece();
        if (this.indice > this.mapa.length - 1) {
          this.indice = 0;
        }
      }

      if (personagem.estaColidindo(inimigo)) {
        vida.perdeVida();
        personagem.tornarInvencivel();

        if (vida.vidas === 0) {
          somJogo.setVolume(0, 0.4);
          noLoop();
          image(imageGameOver, (width / 2) - (imageGameOver.width / 2), height / 2);
          somGameOver.play();
          somGameOver.setVolume(0.5)
        }

      }

      if (personagem.estaColidindo(moeda)) {
        moeda.tocaSom();
        moeda.x = width * 2;
        pontuacao.adicionaMoeda();
      }
    }
}