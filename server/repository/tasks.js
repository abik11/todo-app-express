const { model } = require('mongoose');
const Task = model('task');

const getAllTasks = async () => 
    await Task.find();

const getTaskById = async id => 
    await Task.findOne({ _id: id });

const addTask = async task => {
    const { description } = task;
    const newTask = await Task({ description });
    return await newTask.save();
};

const deleteTask = async id => 
    await Task.deleteOne({ _id: id });

module.exports = {
    getAllTasks,
    getTaskById,
    addTask,
    deleteTask
};