const mongoose = require('mongoose');

// UserStatus Schema
const UserStatusSchema = ({
    statusName: {
        type: String,
        required: true
    }
});

const UserStatus = module.exports = mongoose.model('UserStatus', UserStatusSchema);