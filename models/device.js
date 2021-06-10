let mongoose = require('mongoose');

// Device schema
let deviceSchema = mongoose.Schema({
    device_id: {
        type: Number,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
        required: true,
    },
    latitude: {
        type: mongoose.Schema.Types.Decimal,
        required: true,
    },
    longitude: {
        type: mongoose.Schema.Types.Decimal,
        required: true,
    },
    temperature: {
        type: mongoose.Schema.Types.Decimal,
        required: true,
    },
    humidity: {
        type: mongoose.Schema.Types.Decimal,
        required: true,
    },
    dew_point: {
        type: mongoose.Schema.Types.Decimal,
        required: true,
    },
    carbon_dioxide: {
        type: mongoose.Schema.Types.Decimal,
        required: true,
    },
    tvoc: {
        type: mongoose.Schema.Types.Decimal,
        required: true,
    },
    formaldehyde: {
        type: mongoose.Schema.Types.Decimal,
        required: true,
    },
    toluene: {
        type: mongoose.Schema.Types.Decimal,
        required: true,
    },
    cpm: {
        type: mongoose.Schema.Types.Decimal,
        required: true,
    }
});

let Device = module.exports = mongoose.model('Device', deviceSchema);