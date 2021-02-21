const mongoose = require('mongoose');

// Settings Schema
const Settings_UserSchema = ({
    user_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
    },
    settings_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    }
});

const Settings_User = module.exports = mongoose.model('Settings_User', Settings_UserSchema);