const express = require("express");
const users = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const middleware = require("../verify-token");
const User = require("../core/models/userModel");

users.get("/jwt-test", middleware.auth, (req, res) => {
  res.status(200).json(req.user);
});

/*********************
 *  ROUTE: REGISTER  *
 *********************/
users.post("/register", async (req, res) => {
  // register logic
  try {
    // get user input
    const { email, password } = req.body;
    // validate user input
    if (!(email && password)) {
      res.status(400).send("All fields are required");
    }
    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .send("User with this email already exists. Please login.");
    }
    // encrypt user PW
    encryptedPassword = await bcrypt.hash(password, 10);
    // create user
    const user = await User.create({
      email,
      password: encryptedPassword,
    });
    // create token
    const token = jwt.sign(
      {
        email: user.email,
      },
      process.env.TOKEN_SECRET
    );
    // save user token
    user.token = token;
    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

/*********************
 *  ROUTE: LOGIN  *
 *********************/
users.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All fields are required");
    }

    const user = await User.findOne({ email });

    // encrypt user PW
    encryptedPassword = await bcrypt.hash(password, 10);

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ email: user.email }, process.env.TOKEN_SECRET);

      user.token = token;

      res.status(200).json(user);
    }
    res.status(400).send("invalid credentials");
  } catch (err) {
    console.log(err);
  }
});

module.exports = users;
