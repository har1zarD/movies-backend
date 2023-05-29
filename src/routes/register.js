const express = require("express");
const router = express.Router();
const registerService = require("../services/register");

router.post("/", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const result = await registerService.register({
    firstName,
    lastName,
    email,
    password,
  });
  res.json(result);
});

module.exports = router;
