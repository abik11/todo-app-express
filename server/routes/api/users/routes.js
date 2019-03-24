const express = require('express');
const repository = require('./repository');
const router = express.Router();

router.get('/', async (req, res) => 
    res.json(await repository.getAllUsers()));

router.get('/:id', async (req, res) => 
    res.json(await repository.getUserById(req.params.id)));

module.exports = router;