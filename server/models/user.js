const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String },
    birthdate: { type: Date },
    address: { 
        city: String,
        street: String
    }
});

module.exports = model('user', userSchema);