const express = require('express');
const repo = require('./repository');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.success(await repo.getAllUsers());
    }
    catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        res.success(await repo.getUserById(req.params.id));
    }
    catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const user = req.body;
        if (user.name && user.name != '')
            res.created(await repo.addUser(req.body));
        else
            res.badRequest({ message: 'No name given' });
    }
    catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await repo.getUserById(id);
        if (user) {
            await repo.deleteUser(id);
            res.success({ name: user.name });
        }
        else
            res.badRequest({ message: 'No such user' });
    }
    catch (err) {
        next(err);
    }
});

module.exports = router;