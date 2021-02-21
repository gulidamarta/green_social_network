let mongoose = require('mongoose');

// Channel schema
let ChannelSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectID,
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

let Channel = module.exports = mongoose.model('Channel', ChannelSchema);