const bookModel = require("../models/bookModel")

const createBook = async function(req, res) {
    let book = req.body
    let savedBook = await bookModel.create(book)
    res.send({ msg: savedBook })
}

const getBooksData = async function(req, res) {
    let allBooks = await bookModel.find({ authoName: "Author3" })
    res.send({ msg: allBooks })
}

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData