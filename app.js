require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const User = require("./models/user");
const mongoose = require("mongoose");
const MONGOURI = process.env.MONGODB_URI;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const middleware = require("./middleware");

app.use(express.json());

app.get("/jwt-test", middleware.auth, (req, res) => {
  res.status(200).json(req.user);
});

/****************
 *  MONGOOSE  *
 ****************/
mongoose.connection.on("error", (err) => {
  console.log(err.message + " is MongoDB not running?");
});

mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once("open", () => {
  console.log("connected to mongoose");
});

/*********************
 *  ROUTE: REGISTER  *
 *********************/
app.post("/register", async (req, res) => {
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
    res.status(201).json({ token, user });
  } catch (err) {
    console.log(err);
  }
});

/*********************
 *  ROUTE: LOGIN  *
 *********************/
app.post("/login", async (req, res) => {
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

app.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});
