const express = require('express');
const repository = require('./repository');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.json(await repository.getAllUsers());
    }
    catch(err){
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        res.json(await repository.getUserById(req.params.id));
    }
    catch(err){
        next(err);
    }
});

module.exports = router;