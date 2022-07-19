const { Schema, model } = require("mongoose");
import characterClassModel from "./characterClassModel";
import raceModel from "./raceModel";
import statsModel from "./statsModel";
import weaponModel from "./weaponModel";
import attackModel from "./attackModel";
import userModel from "./userModel";

const characterModel = Schema({
  name: { type: String, required: true },
  race: { type: raceModel, required: true },
  pronouns: { type: String, required: false },
  characterClass: { type: characterClassModel, required: true },
  stats: { type: statsModel, required: true },
  hp: { type: Number, required: false },
  // weapon could be turned into an array in the future
  weapon: { type: weaponModel, required: false },
  attack: { type: attackModel, required: false },
  armorClass: { type: Number, required: true },
  battleCry: { type: String, required: false },
  image: { type: String, required: false },
  backstory: { type: String, required: false },
  initiative: { type: Number, required: false },
  createdBy: { type: userModel, required: false },
});

module.exports = model("Character", characterModel);
