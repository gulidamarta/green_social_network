let mongoose = require('mongoose');

// Video schema
let VideoSchema = mongoose.Schema({
    url: {
        type: String,
        required: true
    }
});

let Video = module.exports = mongoose.model('Video', VideoSchema);