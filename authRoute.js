// authRoute.js
const express = require('express');
const { loginUser, registerUser } = require('./controller');
const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);

module.exports = router;
