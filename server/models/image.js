const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
    title: { type: String },
    description: { type: String },
    name: { type: String },
    imageUrl: { type: String },
    publicId: { type: String }
});

module.exports = model('image', imageSchema); 