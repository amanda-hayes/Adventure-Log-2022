const { Schema, model } = require("mongoose");
import characterClassModel from "./characterClassModel";

const characterModel = Schema({
  name: { type: String, required: true },
  race: { type: String, required: true },
  pronouns: { type: String, required: false },
  characterClass: { type: characterClassModel, required: true },
  strength: { type: String, required: false },
  dexterity: { type: String, required: false },
  constitution: { type: String, required: false },
  intelligence: { type: String, required: false },
  wisdom: { type: String, required: false },
  charisma: { type: String, required: false },
  hp: { type: Number, required: false },
  weapon: { type: String, required: false },
  attack: { type: String, required: false },
  armorClass: { type: Number, required: true },
  battleCry: { type: String, required: false },
  image: { type: String, required: false },
  backstory: { type: String, required: false },
  initiative: { type: Number, required: false },
  createdBy: { type: String, required: false },
});

module.exports = model("Character", characterModel);
