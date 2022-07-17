class Negociacao {
  constructor(data, quantidade, valor) {
    this._date = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  getValor() {
    return this._quantidade * this._valor;
  }

  getDate() {
    return this._date;
  }

  getQuantidade() {
    return this._quantidade;
  }

  getValor() {
    return this._valor;
  }
}
