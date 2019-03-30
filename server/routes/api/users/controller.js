const repo = require('./repository');

module.exports.readAll = async (req, res, next) => {
    try {
        res.success(await repo.getAllUsers());
    }
    catch (err) {
        next(err);
    }
};

module.exports.readOne = async (req, res, next) => {
    try {
        res.success(await repo.getUserById(req.params.id));
    }
    catch (err) {
        next(err);
    }
};

module.exports.create = async (req, res, next) => {
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
};

module.exports.delete = async (req, res, next) => {
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
};