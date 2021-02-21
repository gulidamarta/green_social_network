let mongoose = require('mongoose');

// ActivityTag schema
let ActivityTagSchema = mongoose.Schema({
    tagName: {
        type: String,
        required: true
    }
});

let ActivityTag = module.exports = mongoose.model('ActivityTag', ActivityTagSchema);