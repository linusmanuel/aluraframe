class Negociacao {
  constructor(data, quantidade, valor) {
    this._date = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  get valor() {
    return this._quantidade * this._valor;
  }

  get date() {
    return this._date;
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
}
