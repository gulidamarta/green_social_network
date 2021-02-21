let mongoose = require('mongoose');

// NewsTag schema
let NewsTagSchema = mongoose.Schema({
    tagName: {
        type: String,
        required: true
    }
});

let NewsTag = module.exports = mongoose.model('NewsTag', NewsTagSchema);