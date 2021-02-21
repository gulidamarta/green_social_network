let mongoose = require('mongoose');

// Chat schema
let chatsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    },
    photo_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: false
    }
});

let Chats = module.exports = mongoose.model('Chats', chatsSchema);