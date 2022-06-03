const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const db = require("../models");
const { users } = require("./users"); //array of dummy users
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("error", console.error.bind(console, "Noob database connection error during seeding"));
mongoose.connection.once("open", () => {
  console.log("Connected to MongDB database");
});

const seedDBUsers = () => {
  users.forEach((user) => {
    db.User.create(user);
  });
};

seedDBUsers();
