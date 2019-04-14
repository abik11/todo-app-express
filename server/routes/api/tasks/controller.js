const repo = require('@repository/tasks');

module.exports.readAll = async (req, res, next) => {
    try {
        res.success(await repo.getAllTasks());
    }
    catch (err) {
        next(err);
    }
};

module.exports.create = async (req, res, next) => {
    try {
        const task = req.body;
        if (task.description && task.description != '')
            res.created(await repo.addTask(req.body));
        else
            res.badRequest({ message: 'No task description given' });
    }
    catch (err) {
        next(err);
    }
};

module.exports.delete = async (req, res, next) => {
    const { id } = req.params;
    try {
        const task = await repo.getTaskById(id);
        if (task) {
            await repo.deleteTask(id);
            res.success({ description: task.description });
        }
        else
            res.badRequest({ message: 'No such task' });
    }
    catch (err) {
        next(err);
    }
};