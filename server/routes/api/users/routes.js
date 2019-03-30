const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.readAll);
router.get('/:id', controller.readOne);
router.post('/', controller.create);
router.delete('/:id', controller.delete);

module.exports = router;