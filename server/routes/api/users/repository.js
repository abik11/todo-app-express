const { model } = require('mongoose');
const User = model('user');
const Role = model('role');

const getAllUsers = async () => 
    await User.find().populate('role');

const getUserById = async id => 
    await User.findOne({ _id: id }).populate('role');

const addUser = async user => {
    const reader = await Role.findOne({ name: 'reader' });
    const newUser = await User({
        ...user,
        role: reader._id
    });
    
    return await newUser.save();
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser
};