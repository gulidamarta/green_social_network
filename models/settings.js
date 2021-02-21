const mongoose = require('mongoose');

// Settings Schema
const SettingsSchema = ({
    key: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true
    },
    updated_at: {
        type: Date,
        required: true
    }
});

const Settings = module.exports = mongoose.model('Settings', SettingsSchema);