let mongoose = require('mongoose');

// Chat schema
let chatsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now()
    },
    photo_url: {
        type: String,
        required: true,
        default: '/icons/ico_default.jpg',
    }
});

let Chats = module.exports = mongoose.model('Chats', chatsSchema);