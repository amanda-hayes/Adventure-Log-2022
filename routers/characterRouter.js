const express = require("express");
const characters = express.Router();
const characterModel = require("../models/character");

/******************
 *  ROUTE: POST  *
 ******************/

characters.post("/create", async (req, res) => {
  try {
    const createdCharacter = await characterModel.create(req.body);
    res.status(200).json(createdCharacter);
  } catch (error) {
    console.log(error);
  }
});

module.exports = characters;
