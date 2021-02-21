const mongoose = require('mongoose');

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: false
    },
    role_id: {
        type: Number,
        required: false
    },
    residence_place_id: {
        type: Number,
        required: false,
    },
    current_status_id: {
        type: Number,
        required: false
    },
    rating_table_id: {
        type: Number,
        required: false
    }
});

const User = module.exports = mongoose.model('User', UserSchema);