const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.homeView);
router.get('/add', controller.addView);
router.post('/add', controller.create);

module.exports = router;