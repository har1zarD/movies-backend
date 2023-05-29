const bcrypt = require("bcrypt");
const User = require("../models/user");

async function registerUser(req, res) {
  const { firstName, lastName, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await user.save();
    return res.status(201).json({ status: "ok" });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
}

module.exports = { registerUser };
