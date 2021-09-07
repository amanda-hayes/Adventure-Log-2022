require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const User = require("./models/user");

app.use(express.json());
// app.use("/userRouter", userRouter);

const mongoose = require("mongoose");
const MONGOURI = process.env.MONGODB_URI;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

mongoose.connection.on("error", (err) => {
  console.log(err.message + " is MongoDB not running?");
});

mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once("open", () => {
  console.log("connected to mongoose");
});

// Register
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
      password,
    });

    // create token
    const token = jwt.sign(
      {
        email: User.email,
      },
      process.env.TOKEN_SECRET
    );

    // save token
    user.token = token;

    // return new user
    res.status(201).json(User);
  } catch (err) {
    console.log(err);
  }
});

// Login
app.post("/login", (req, res) => {
  // login logic
});

app.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});
