const express = require('express');
const router = express.Router();
const controller = require('./controller');
const auth = require('@utils/auth');

router.get('/show', auth, controller.imagesView);
router.get('/add', auth, controller.uploadView);
router.post('/add', auth, controller.create);
router.get('/delete/:id', auth, controller.delete);

module.exports = router;