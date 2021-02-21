let mongoose = require('mongoose');

// Message_Photo schema
let Message_PhotoSchema = mongoose.Schema({
    message_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    },
    photo_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    }
});

let Message_Photo = module.exports = mongoose.model('Message_Photo', Message_PhotoSchema);