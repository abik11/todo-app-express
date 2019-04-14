const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    description: { 
        type: String,
        required: true
    },
    addDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('task', taskSchema);