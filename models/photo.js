let mongoose = require('mongoose');

// Photo schema
let PhotoSchema = mongoose.Schema({
    url: {
        type: String,
        required: true
    }
});

let Photo = module.exports = mongoose.model('Photo', PhotoSchema);