const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('upload/images'));
router.get('/add', (req, res) => res.render('upload/upload'));

module.exports = router;