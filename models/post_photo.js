let mongoose = require('mongoose');

// Post_Photo schema
let Post_PhotoSchema = mongoose.Schema({
    post_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    },
    photo_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    }
});

let Post_Photo = module.exports = mongoose.model('Post_Photo', Post_PhotoSchema);