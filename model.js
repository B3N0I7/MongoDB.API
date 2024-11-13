const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  nom: { type: String, require: true },
  prenom: { type: String, require: true },
  age: { type: Number, require: true },
  ville: { type: String, require: true },
  livres: [{ type: String, require: false }],
});

module.exports = mongoose.model("Writer", schema, "TestCollection");
