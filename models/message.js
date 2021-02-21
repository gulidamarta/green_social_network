let mongoose = require('mongoose');

// Message schema
let messagesSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    },
    chat_room_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    }
});

let Messages = module.exports = mongoose.model('Messages', messagesSchema);