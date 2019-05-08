const expect = require('chai').expect;
const sinon = require('sinon');
const Task = require('../server/models/task');
const repo = require('../server/repository/tasks');

describe('tasks', () => {
    let allTasks = [];

    beforeEach(() => {
        for (let i = 0; i < 100; i++)
            allTasks.push({
                id: i + 1,
                description: `task${i + 1}`
            });

        sinon.stub(Task, 'find').returns(Promise.resolve(allTasks));
        sinon.stub(Task, 'findOne').callsFake(conditions => {
            const task = allTasks.find(t => t.id == conditions._id);
            return Promise.resolve(task);
        });
        sinon.stub(Task, 'deleteOne').callsFake(conditions => {
            const deleted = allTasks.splice(conditions._id - 1, 1);
            return Promise.resolve(deleted[0]);
        });
    });

    afterEach(function () {
        Task.find.restore();
        Task.findOne.restore();
        Task.deleteOne.restore();
        allTasks = [];
    });

    it('getAllTasks should return all tasks', async () => {
        let tasks = await repo.getAllTasks();
        expect(tasks).to.be.equal(allTasks);
    });

    it('getTaskById should return task of given id', async () => {
        let task = await repo.getTaskById(10);
        expect(task.id).to.be.equal(10);
    });

    it('deleteTask should return deleted task', async () => {
        let taskToBeDeleted = allTasks[0];
        let task = await repo.deleteTask(1);
        expect(task).to.be.equal(taskToBeDeleted);
    });

    it('deleteTask should delete task', async () => {
        await repo.deleteTask(1);
        expect(allTasks.length).to.be.equal(99);
    });
});