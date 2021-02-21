let mongoose = require('mongoose');

// Post_Video schema
let Post_VideoSchema = mongoose.Schema({
    post_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    },
    video_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    }
});

let Post_Video = module.exports = mongoose.model('Post_Video', Post_VideoSchema);