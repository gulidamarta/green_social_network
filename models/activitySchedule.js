let mongoose = require('mongoose');

// ActivitySchedule schema
let ActivityScheduleSchema = mongoose.Schema({
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    }
});

let ActivitySchedule = module.exports = mongoose.model('ActivitySchedule', ActivityScheduleSchema);