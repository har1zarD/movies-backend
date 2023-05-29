const loginService = require('../services/login');

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const result = await loginService.login({ email, password });
    res.json(result);
  } catch (error) {
    res.status(401).json({ status: 'error', message: error.message });
  }
}

module.exports = { login };
