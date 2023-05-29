const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

async function login({ email, password }) {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid login credentials");
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  return { status: "ok", data: token };
}

module.exports = { login };
