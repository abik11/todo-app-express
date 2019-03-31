const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.homeView);
router.get('/add', controller.addView);
router.post('/add', controller.create);
router.get('/delete/:id', controller.delete);

module.exports = router;