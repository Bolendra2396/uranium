const express = require('express');
const router = express.Router();
const bookModel1 = require("../models/bookModel1.js");
const bookController = require("../controllers/bookController");



router.post("/createBook", bookController.createBook);

router.get("/booklist", bookController.booklist);

router.post("/getBooksInYear", bookController.getBooksInYear);

router.post("/getParticularBooks", bookController.getParticularBooks);

router.get("/getXINRBooks", bookController.getXINRBooks);

router.get("/getRandomBooks", bookController.getRandomBooks);

module.exports = router;