const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.loginView);
//router.post('/login', () => {});
router.get('/register', controller.registerView);
//router.post('/register', () => {});

module.exports = router;