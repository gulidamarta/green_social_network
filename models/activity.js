let mongoose = require('mongoose');

// News schema
let activitiesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    latitude: {
        type:  mongoose.Schema.Types.Decimal,
        required: true
    },
    longitude: {
        type: mongoose.Schema.Types.Decimal,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    }
});

let Activities = module.exports = mongoose.model('Activities', activitiesSchema);