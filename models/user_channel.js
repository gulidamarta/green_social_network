const mongoose = require('mongoose');

// User_Channel Schema
const User_ChannelSchema = ({
    user_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
    },
    channel_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    }
});

const User_Channel = module.exports = mongoose.model('User_Channel', User_ChannelSchema);