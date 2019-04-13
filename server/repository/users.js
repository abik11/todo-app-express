const { model } = require('mongoose');
const User = model('user');
const Role = model('role');

const getAllUsers = async () => 
    await User.find().populate('role');

const getUserById = async id => 
    await User.findOne({ _id: id }).populate('role');

const addUser = async user => {
    const { name, birthday, address } = user;
    const role = await Role.findOne({ name: 'reader' });

    const newUser = await User({
        name, birthday, address, role
    });
    
    return await newUser.save();
};

const deleteUser = async id => 
    await User.deleteOne({ _id: id });

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    deleteUser
};