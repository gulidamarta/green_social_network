let mongoose = require('mongoose');

// News schema
let chatsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});

let Chats = module.exports = mongoose.model('Chats', chatsSchema);