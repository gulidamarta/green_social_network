const mongoose = require('mongoose');

// Photo_Activity Schema
const Photo_ActivitySchema = ({
    photo_url: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
    },
    activity_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: false
    }
});

const Photo_Activity = module.exports = mongoose.model('Photo_Activity', Photo_ActivitySchema);