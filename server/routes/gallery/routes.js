const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/show', controller.imagesView);
router.get('/add', controller.uploadView);
router.post('/add', controller.create);
router.get('/delete/:id', controller.delete);

module.exports = router;