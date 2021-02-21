let mongoose = require('mongoose');

// NewsCategory schema
let NewsCategorySchema = mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    }
});

let NewsCategory = module.exports = mongoose.model('NewsCategory', NewsCategorySchema);