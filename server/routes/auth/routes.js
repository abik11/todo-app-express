const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.loginView);
router.get('/login', controller.loginView);
router.post('/login', controller.login);
router.get('/logout', controller.logout);
router.get('/register', controller.registerView);
router.post('/register', controller.register);

module.exports = router;