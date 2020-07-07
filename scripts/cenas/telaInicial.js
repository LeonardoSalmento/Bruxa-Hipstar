class TelaInicial {
  constructor() {}


  draw() {
    this._imagemFundo();
    this._texto();
    this._botao();
  }

  _imagemFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }

  _texto() {
    textFont(fonteTelaInicial);
    textAlign('center');
    textSize(50);
    text('As aventuras de', width / 2, height / 3);
    textSize(100);
    text('Ripsta', width / 2, height / 5 * 2.5);
  }

  _botao() {
    botaoGerenciador.y = height /2 * 1.3;
    botaoGerenciador.draw();
  }
}