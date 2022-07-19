const { Schema, model } = require("mongoose");

const attackModel = Schema({
  Index: { type: Number, required: true },
  Name: { type: String, required: true },
  Damage: { type: Number, required: true },
});
