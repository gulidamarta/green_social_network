let mongoose = require('mongoose');

// News schema
let newsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: false
    },
    short_description: {
        type: String,
        required: false,
    },
    body: {
        type: String,
        required: false
    },
    image_url: {
        type: String,
        required: false
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: false
    }
});

newsSchema.set('timestamps', true);

let News = module.exports = mongoose.model('News', newsSchema);