const { Schema, model } = require("mongoose");
import characterClassModel from "./characterClassModel";
import raceModel from "./raceModel";
import statsModel from "./statsModel";

const characterModel = Schema({
  name: { type: String, required: true },
  race: { type: raceModel, required: true },
  pronouns: { type: String, required: false },
  characterClass: { type: characterClassModel, required: true },
  stats: { type: statsModel, required: true },
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
