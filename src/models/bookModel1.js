const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: { type: String, required: true },

    prices: { indianPrice: String, europianPrice: String },

    year: { type: Number, default: 2021 },

    tags: [String],

    authorName: String,

    categories: String,

    totalPages: Number,

    stockAvailable: Boolean


    // isPublished: Boolean,
    /*prices: {
    indianPrice: String,
    europePrice: String,
    */
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //books

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover