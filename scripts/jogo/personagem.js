class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

    this.variacaoY = variacaoY

    this.yInicial = height - altura - this.variacaoY;
    this.y = this.yInicial;

    this.gravidade = 3;
    this.velocidadePulo = 0;
    this.alturaPulo = -30;
    this.pulos = 0;
    this.invencivel = false
  }
  pula() {
    if (this.pulos < 2) {
      this.velocidadePulo = this.alturaPulo;
      this.pulos++
    }

  }

  tornarInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false
    }, 1000)
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadePulo
    this.velocidadePulo = this.velocidadePulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }

  estaColidindo(inimigo) {
    if (this.invencivel === false) {
      const precisao = .7;
      const colisao = collideRectRect(
        this.x,
        this.y,
        this.largura * precisao,
        this.altura * precisao,
        inimigo.x,
        inimigo.y,
        inimigo.largura * precisao,
        inimigo.altura * precisao
      );

      return colisao;
    }

  }


}