let mongoose = require('mongoose');

// Activity schema
let activitiesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    activityPlace_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    },
    activitySchedule_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    }
});

let Activities = module.exports = mongoose.model('Activities', activitiesSchema);