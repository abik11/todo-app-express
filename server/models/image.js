const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
    title: { type: String },
    description: { type: String },
    url: {
        type: String,
        required: true
    },
    public_id: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
});

module.exports = model('image', imageSchema); 