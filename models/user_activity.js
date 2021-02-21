const mongoose = require('mongoose');

// User_Activity Schema
const User_ActivitySchema = ({
    user_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
    },
    activity_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    }
});

const User_Activity = module.exports = mongoose.model('User_Activity', User_ActivitySchema);