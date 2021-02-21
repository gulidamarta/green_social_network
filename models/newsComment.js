let mongoose = require('mongoose');

// NewsComment schema
let NewsCommentSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    },
    news_id: {
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

let NewsComment = module.exports = mongoose.model('NewsComment', NewsCommentSchema);