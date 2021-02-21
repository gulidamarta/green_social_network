let mongoose = require('mongoose');

// NewsTag_News schema
let NewsTag_NewsSchema = mongoose.Schema({
    news_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    },
    newsTag_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    }
});

let NewsTag_News = module.exports = mongoose.model('NewsTag_News', NewsTag_NewsSchema);