const mongoose = require('mongoose');

// ResidencePlace Schema
const ResidencePlaceSchema = ({
    country: {
        type: String,
        required: false,
    },
    town: {
        type: String,
        required: false
    }
});

const ResidencePlace = module.exports = mongoose.model('ResidencePlace', ResidencePlaceSchema);