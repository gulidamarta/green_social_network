const mongoose = require('mongoose');

// User_Chat Schema
const User_ChatSchema = ({
    user_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
    },
    chat_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    }
});

const User_Chat = module.exports = mongoose.model('User_Chat', User_ChatSchema);