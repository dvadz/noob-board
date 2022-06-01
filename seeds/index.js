const dotenv = require("dotenv");
const User = require("../models/User");
const mongoose = require("mongoose");

const result = dotenv.config({ path: "../.env" });
const Db = process.env.MONGODB_URI;

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("error", console.error.bind(console, "Noob database connection error during seeding"));
mongoose.connection.once("open", () => {
  console.log("Connected to MongDB database");
});
