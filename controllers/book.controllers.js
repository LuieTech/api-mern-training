const Book = require('../models/book.model')

module.exports.list = (req, res, next) => {
  Book.find()
    .then(books => res.status(200).json(books))
    .catch(error => next(error))
}

module.exports.create = (req, res, next) => {

  const body = req.body

  Book.create(body)
    .then(book => res.status(201).json(book))
    .catch(error => next(error))

}

module.exports.details = (req, res, next) => {

  const bookTitle = req.params.title

  Book.findOne({title: bookTitle})
    .then(book => res.status(200).json(book))
    .catch(error => next(error))

}

