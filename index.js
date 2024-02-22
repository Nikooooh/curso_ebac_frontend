const Cachorro = require("./Cachorro");
const Gato = require("./Gato");

const cachorro1 = new Cachorro("Rex", 3, "Labrador");
const gato1 = new Gato("Persa", 2, "Cinza");
const cachorro2 = new Cachorro("Bella", 5, "Golden Retriever");

cachorro1.emitirSom();
cachorro1.abanarRabo();

gato1.emitirSom();
gato1.ronronar();

cachorro2.emitirSom();
cachorro2.abanarRabo();
