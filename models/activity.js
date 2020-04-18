let mongoose = require('mongoose');

// News schema
let activitySchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    date_created: {
        type: Date,
        required: true
    },
    date_finished: {
        type: Date,
        required: true
    }
});

let News = module.exports = mongoose.model('Activity', activitySchema);