const express = require("express");

const router = express.Router();
const books = require('../controllers/book.controllers')

router.get('/books', books.list)


module.exports = router;
