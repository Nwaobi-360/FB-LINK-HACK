// // routes/authRoutes.js

// const express = require('express');
// const router = express.Router();
// const LoginController = require ('../controller/fbcontroller')
// router.post('/login', LoginController);

// module.exports = router;

const express = require('express');
const AuthController = require('../controller/fbcontroller');
const router = express.Router();

router.post('/login', AuthController.login);

module.exports = router;
