let mongoose = require('mongoose');

// News schema
let newsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: false
    },
    created_at: {
        type: Date,
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: false
    }
});

let News = module.exports = mongoose.model('News', newsSchema);