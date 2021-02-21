let mongoose = require('mongoose');

// Post schema
let postSchema = mongoose.Schema({
    channel_id: {
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

let Post = module.exports = mongoose.model('Post', postSchema);