class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  emitirSom() {
    console.log("O som do animal");
  }
}

module.exports = Animal;
