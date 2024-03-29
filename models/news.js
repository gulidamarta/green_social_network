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
    }
});

let News = module.exports = mongoose.model('News', newsSchema);