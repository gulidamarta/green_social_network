let mongoose = require('mongoose');

// ActivityTag_Activity schema
let ActivityTag_ActivitySchema = mongoose.Schema({
    activity_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    },
    activityTag_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    }
});

let ActivityTag_Activity = module.exports = mongoose.model('ActivityTag_Activity', ActivityTag_ActivitySchema);