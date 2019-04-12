const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    birthdate: { type: Date },
    address: { 
        city: String,
        street: String
    },
    role: { type: Schema.Types.ObjectId, ref: 'role' }
});

module.exports = model('user', userSchema); 