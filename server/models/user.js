const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    registerDate: {
        type: Date,
        default: Date.now
    },
    birthdate: { type: Date },
    address: {
        city: String,
        street: String
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'role',
        required: true
    }
});

module.exports = model('user', userSchema); 