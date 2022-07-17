class Negociacao {
  constructor(data, quantidade, valor) {
    this.date = data;
    this.quantidade = quantidade;
    this.valor = valor;
  }

  obtemValor() {
    return this.quantidade * this.valor;
  }
}