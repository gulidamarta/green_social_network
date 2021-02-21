let mongoose = require('mongoose');

// NewsComment_News schema
let NewsComment_NewsSchema = mongoose.Schema({
    news_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    },
    newsComment_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    }
});

let NewsComment_News = module.exports = mongoose.model('NewsComment_News', NewsComment_NewsSchema);