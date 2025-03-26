const Book = require('../models/book.model')

module.exports.list = (req, res, next) => {

  Book.find()
    .then(books => res.status(200).json(books))
    .catch(error => next(error))

}