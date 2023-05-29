const bcrypt = require("bcrypt");
const User = require("../models/user");

async function register({ firstName, lastName, email, password }) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  try {
    await user.save();
    return { status: "ok" };
  } catch (error) {
    return { status: "error", message: error.message };
  }
}

module.exports = { register };
