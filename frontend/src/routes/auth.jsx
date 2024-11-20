require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const users = []; // This should be replaced with a database in production

// User Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(403).send('Invalid credentials');
  }
  const token = jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

// Landing Page
router.get('/', (req, res) => {
  res.send('Welcome to the Community Platform');
});

// Home Page
router.get('/home', (req, res) => {
  res.send('Welcome to the Home page');
});

module.exports = router;