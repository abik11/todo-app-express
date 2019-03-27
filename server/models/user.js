const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String },
    birthdate: { type: Date }
});

module.exports = model('user', userSchema);