const Animal = require("./Animal");

class Cachorro extends Animal {
  constructor(nome, idade, raca) {
    super(nome, idade);
    this.raca = raca;
  }

  abanarRabo() {
    console.log(`${this.nome} está abanando o rabo.`);
  }
}

module.exports = Cachorro;
