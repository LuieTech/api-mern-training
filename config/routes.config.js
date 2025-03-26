const express = require("express");

const router = express.Router();
const books = require('../controllers/book.controllers')

router.get('/books', books.list)
router.post("/books", books.create)
router.get('/books/:title', books.details)


module.exports = router;
