// controllers/bookController.js
const Book = require('../models/book');

exports.getAllBooks = async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
};

exports.getBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  book ? res.json(book) : res.status(404).send('Book not found');
};

exports.createBook = async (req, res) => {
  const bookId = await Book.create(req.body);
  res.status(201).json({ id: bookId, ...req.body });
};

exports.updateBook = async (req, res) => {
  await Book.update(req.params.id, req.body);
  res.send('Book updated');
};

exports.deleteBook = async (req, res) => {
  await Book.delete(req.params.id);
  res.send('Book deleted');
};
