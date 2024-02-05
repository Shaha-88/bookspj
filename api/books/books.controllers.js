const Book = require("../../models/Book_");

const getAllBooks = async (req, res, next) => {
    try {
      const books = await Book.find();
      return res.json(books);
    } catch (error) {
      next(error);
    }
  };

  const getBookById = async (req, res, next) => {
    try {
      return res.status(200).json(req.book);
    } catch (error) {
      next(error);
    }
  };

  const bookCreate = async (req, res, next) => {
   
    try {
      if (req.file) {
        req.body.image = req.file.path;
      }
      const book = await Book.create(req.body);
      return res.status(201).json(book);
    } catch (error) {
      next(error);
    }
  };


  const deleteBook = async (req, res, next) => {
    try {
      await req.book.deleteOne();
      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  };


  const updateBook = async (req, res, next) => {
    try {
      await req.book.updateOne(req.body);
      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  };


  module.exports = {getAllBooks, getBookById,bookCreate,updateBook,deleteBook }