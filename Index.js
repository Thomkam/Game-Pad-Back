const { log } = require("console");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost/game-pad-back");

const userRoutes = require("./routes/user");
app.use(userRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ error: "no existing path" });
});

app.listen(3000, () => {
  console.log("Server OKOK");
});
