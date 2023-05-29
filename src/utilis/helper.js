const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = env.JWT_SECRET;

function generateToken(payload) {
  const token = jwt.sign(payload, secretKey);
  return token;
}

module.exports = generateToken;
