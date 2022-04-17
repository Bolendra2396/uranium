// const mongoose = require('mongoose');
const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
    name: String,
    author: {
        type: ObjectId,
        ref: "Author",
        required: true
    },
    ratings: Number,
    publisher: {
        type: ObjectId,
        ref: "publisher",
        required: true
    },

    isHardcover: {
        type: Boolean,
        default: false
    }


}, { timestamps: true });


module.exports = mongoose.model('NewLibraryBook(14thApril)', bookSchema)