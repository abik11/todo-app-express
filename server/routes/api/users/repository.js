const { ObjectID } = require('mongodb');
const dbHandler = require('../../../config/mongodb');

const loadUsers = async () => {
    const db = await dbHandler();
    return await db.collection('users');
};

const getAllUsers = async () => {
    const users = await loadUsers();
    return await users.find({}).toArray();
};

const getUserById = async id => {
    const users = await loadUsers();
    return await users.find({ _id: new ObjectID(id) }).toArray();
};

module.exports = {
    getAllUsers,
    getUserById
};