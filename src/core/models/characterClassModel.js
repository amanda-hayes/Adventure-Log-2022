const { Schema, model } = require("mongoose");

const characterClassModel = Schema({
  Index: { type: Number, required: true },
  Name: { type: String, required: true },
});

module.exports = model("CharacterClass", characterClassModel);
