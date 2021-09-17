const express = require("express");
const userCharacters = express.Router();
const userCharacterModel = require("../models/userCharacters");

/******************
 *  ROUTE: POST  *
 ******************/

userCharacters.post("/create", async (req, res) => {
  try {
    const createdUserCharacter = await userCharacterModel.create(req.body);
    res.status(200).json(createdUserCharacter);
  } catch (error) {
    console.log(error);
  }
});

/****************
 *  ROUTE: GET  *
 ****************/

userCharacters.get("/dashboard", async (req, res) => {
  try {
    const foundUserCharacters = await userCharacterModel.find({});
    res.status(200).json(foundUserCharacters);
  } catch (error) {
    console.log(error);
  }
});

/****************
 *  ROUTE: PUT  *
 ****************/
try {
  userCharacters.put("/:id", async (req, res) => {
    const updatedUserCharacter = await userCharacterModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedUserCharacter);
  });
} catch (error) {
  console.log(error);
}

/*****************************
 *  ROUTE: SHOW CHAR DETAILS  *
 *****************************/
userCharacters.get("/:id", async (req, res) => {
  try {
    const foundUserCharacter = await userCharacterModel.findById(req.params.id);
    console.log(foundUserCharacter);
    res.status(200).json(foundUserCharacter);
  } catch (error) {
    console.log(error);
  }
});

/*******************
 *  ROUTE: DELETE  *
 *******************/

userCharacters.delete("/:id", async (req, res) => {
  try {
    const deletedUserCharacter = await userCharacterModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(deletedUserCharacter);
  } catch (error) {
    console.log(error);
  }
});

module.exports = userCharacters;
