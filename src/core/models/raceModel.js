const { Schema, model } = require("mongoose");

const raceModel = Schema({
  Index: { type: Number, required: true },
  Name: { type: String, required: true },
  Movement: { type: Number, required: true },
});

module.exports = model("Race", raceModel);
