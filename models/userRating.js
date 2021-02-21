const mongoose = require('mongoose');

// UserRating Schema
const UserRatingSchema = ({
    points: {
        type: mongoose.Schema.Types.Decimal,
        required: true
    }
});

const UserRating = module.exports = mongoose.model('UserRating', UserRatingSchema);