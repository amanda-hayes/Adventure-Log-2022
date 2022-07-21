const { Schema, model } = require("mongoose");

const weaponModel = Schema({
  Index: { type: Number, required: true },
  Name: { type: String, required: true },
  Damage: { type: Number, required: true },
});

module.exports = model("Weapon", weaponModel);
