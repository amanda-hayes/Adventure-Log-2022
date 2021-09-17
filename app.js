require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const userRouter = require("./routers/userRouter");
const characterRouter = require("./routers/characterRouter");
const userCharacterRouter = require("./routers/userCharacterRouter");
const mongoose = require("mongoose");
const MONGOURI = process.env.MONGODB_URI;
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/characters", characterRouter);
app.use("/users", userRouter);
app.use("/userCharacters", userCharacterRouter);

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

app.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});
