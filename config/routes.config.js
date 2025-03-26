const express = require("express");

const router = express.Router();
const books = require('../controllers/book.controllers')

router.get('/books', books.list)
router.get('/book/:title', books.details)


module.exports = router;
