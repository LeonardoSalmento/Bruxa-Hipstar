class Jogo {
  constructor() {
    this.indice = 0;
    
    this.mapa = fita.mapa;

  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 8);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 100, 100, 75, 200, 150, 8);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 8);

    inimigos.push(inimigo);
    inimigos.push(inimigoVoador);
    inimigos.push(inimigoGrande);
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
      somPulo.play();
    }

  }

  draw() {
    cenario.exibe();
    cenario.move();
    vida.draw();

    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();
    const linhaAtual =  this.mapa[this.indice]
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();
    inimigo.aparece();

    if (inimigoVisivel) {
      this.indice++
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }

      inimigo.velocidade = linhaAtual.velocidade;
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.tornarInvencivel();

      if (vida.vidas === 0) {
        image(imagemGameOver, width / 2 - 200, height / 3);
        //noLoop();

      }
    }
  }

}