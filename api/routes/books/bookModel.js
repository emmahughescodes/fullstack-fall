'use strict';

const mongoose = require('mongoose');
const { Schema }  = mongoose;

// Map to fields in the DB
const bookSchema = new Schema({
    title: String,
    authorName: String,
    rating: {
        type: Number,
        min: 1, 
        max: 5,
    },
    comment: String,
});

module.exports = mongoose.model('Book', bookSchema);
