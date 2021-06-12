let mongoose = require('mongoose');

// Chat schema
let chatsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    photo_url: {
        type: String,
        required: true,
        default: '/icons/ico_default.jpg',
    },
    last_msg: {
        type: String,
        required: false,
    }
});

chatsSchema.set('timestamps', true);

let Chats = module.exports = mongoose.model('Chats', chatsSchema);