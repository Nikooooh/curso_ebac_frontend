const Animal = require("./Animal");

class Gato extends Animal {
  constructor(nome, idade, cor) {
    super(nome, idade);
    this.cor = cor;
  }

  ronronar() {
    console.log(`${this.nome} está ronronando.`);
  }
}

module.exports = Gato;
