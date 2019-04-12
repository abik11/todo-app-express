const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.loginView);
router.get('/login', controller.loginView);
router.get('/register', controller.registerView);

module.exports = router;