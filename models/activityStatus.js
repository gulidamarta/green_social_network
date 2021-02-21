let mongoose = require('mongoose');

// ActivityStatus schema
let ActivityStatusSchema = mongoose.Schema({
    statusName: {
        type: String,
        required: true
    }
});

let ActivityStatus = module.exports = mongoose.model('ActivityStatus', ActivityStatusSchema);