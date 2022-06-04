const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const { users } = require("./users"); //array of dummy users
const mongoose = require("mongoose");
const User = require("../models/User");
const Post = require("../models/Post");

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("error", console.error.bind(console, "Noob database connection error during seeding"));
mongoose.connection.once("open", () => {
  console.log("Connected to MongDB database");
});

const seedDBUsers = () => {
  users.forEach(async (user) => {
    const newUser = new User({ ...user.user });
    newUser.password = newUser.hashPassword(newUser.password);
    const result = await newUser.save();
  });
};

seedDBUsers();
