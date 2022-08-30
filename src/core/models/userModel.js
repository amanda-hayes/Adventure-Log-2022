const { Schema, model } = require("mongoose");

const userModel = Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = model("User", userModel);
