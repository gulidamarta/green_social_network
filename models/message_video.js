let mongoose = require('mongoose');

// Message_Video schema
let Message_VideoSchema = mongoose.Schema({
    message_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    },
    video_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    }
});

let Message_Video = module.exports = mongoose.model('Message_Video', Message_VideoSchema);