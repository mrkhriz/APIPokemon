const mongoose = require("mongoose");
mongoose
  .connect("mongodb://chrisdb:123456@127.0.0.1:27017/pokemon", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Conexión de base datos exitosa"))
  .catch(err => console.log("Error al conectar con la base de datos", err));

const pokemonSchema = new mongoose.Schema({
  nombre: String,
  tipo: String,
  nivel: Number
});

const pokemonModel = mongoose.model("Pokemones", pokemonSchema);

const nuevoPokemon = new pokemonModel({
  nombre: "Charizard",
  tipo: "fuego",
  nivel: 100
});

nuevoPokemon
  .save()
  .then(() => console.log("Se agregó correctamente el nuevo pokemon"))
  .catch(err => console.log("Error al agregar el nuevo pokemon", err));

pokemonModel
  .find()
  .then(pokemones => console.log("Lista de todos los pokemones: ", pokemones))
  .catch(err => console.log("Se produjo un error al leer los pokemones", err));