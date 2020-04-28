let mongoose = require('mongoose');

// News schema
let messagesSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    chat_room_id: {
        type: String,
        required: true
    }
});

let Messages = module.exports = mongoose.model('Messages', messagesSchema);