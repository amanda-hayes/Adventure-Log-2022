const express = require("express");
const characters = express.Router();
const characterModel = require("../models/characterModel");

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

/****************
 *  ROUTE: GET  *
 ****************/

characters.get("/dashboard", async (req, res) => {
  try {
    const foundCharacters = await characterModel.find({});
    res.status(200).json(foundCharacters);
  } catch (error) {
    console.log(error);
  }
});

/****************
 *  ROUTE: PUT  *
 ****************/
try {
  characters.put("/:id", async (req, res) => {
    const updatedCharacter = await characterModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedCharacter);
  });
} catch (error) {
  console.log(error);
}

/*****************************
 *  ROUTE: SHOW CHAR DETAILS  *
 *****************************/
characters.get("/:id", async (req, res) => {
  try {
    const foundCharacter = await characterModel.findById(req.params.id);
    console.log(foundCharacter);
    res.status(200).json(foundCharacter);
  } catch (error) {
    console.log(error);
  }
});

/*******************
 *  ROUTE: DELETE  *
 *******************/

characters.delete("/:id", async (req, res) => {
  try {
    const deletedCharacter = await characterModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(deletedCharacter);
  } catch (error) {
    console.log(error);
  }
});

module.exports = characters;
