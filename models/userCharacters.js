const { Schema, model } = require("mongoose");

const userCharacters = Schema({
  userId: { type: String },
  characterId: { type: String },
});

module.exports = model("userCharacters", userCharacters);
