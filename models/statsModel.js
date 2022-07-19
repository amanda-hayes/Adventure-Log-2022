const { Schema, model } = require("mongoose");

const statsModel = Schema({
  Index: { type: Number, required: true },
  strength: { type: String, required: false },
  dexterity: { type: String, required: false },
  constitution: { type: String, required: false },
  intelligence: { type: String, required: false },
  wisdom: { type: String, required: false },
  charisma: { type: String, required: false },
});

module.exports = model("Stats", statsModel);
