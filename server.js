require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");
const MONGOURI = process.env.MONGODB_URI;

mongoose.connection.on("error", (err) => {
  console.log(err.message + " is MongoDB not running?");
});

mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once("open", () => {
  console.log("connected to mongoose");
});

app.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});
