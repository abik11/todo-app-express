const { model } = require('mongoose');
const User = model('user');

const getAllUsers = async () => await User.find();

const getUserById = async id => await User.findOne({ _id: id });

module.exports = {
    getAllUsers,
    getUserById
};