const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Writer = require("./model");

const port = 8080;

mongoose.connect("mongodb://localhost:27017/TestDatabase");

app.listen(port, function () {
  console.log(`app listening on port: ${port}`);
});

app.get("/writers", async (req, res) => {
  console.log("Getting all writers");
  const data = await Writer.find({});
  console.log(data);
  res.json(data);
});

app.post("/addWriter", async (req, res) => {
  console.log("add writer");
  const writer = new Writer({
    nom: req.body.nom,
    prenom: req.body.prenom,
    age: req.body.age,
    ville: req.body.ville,
  });
  try {
    const newWriter = await writer.save();
    res.status(200).json(newWriter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
