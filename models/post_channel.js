const mongoose = require('mongoose');

// Post_Channel Schema
const Post_ChannelSchema = ({
    post_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
    },
    channel_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    }
});

const Post_Channel = module.exports = mongoose.model('Post_Channel', Post_ChannelSchema);