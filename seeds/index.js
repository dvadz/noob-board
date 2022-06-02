const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const User = require("../models/User");
const { users } = require("./users");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("error", console.error.bind(console, "Noob database connection error during seeding"));
mongoose.connection.once("open", () => {
  console.log("Connected to MongDB database");
});
