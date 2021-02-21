let mongoose = require('mongoose');

// ActivityPlace schema
let ActivityPlaceSchema = mongoose.Schema({
    latitude: {
        type:  mongoose.Schema.Types.Decimal,
        required: true
    },
    longitude: {
        type: mongoose.Schema.Types.Decimal,
        required: true
    }
});

let ActivityPlace = module.exports = mongoose.model('ActivityPlace', ActivityPlaceSchema);