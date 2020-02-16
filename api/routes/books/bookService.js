'use strict';

const Book = require('./bookModel');

// Helper function to list each of the books in the database
exports.listBooks = async () => {
    try {
        const books = await Book.find();
        return books;
    } catch (ex) {
        throw new Error(ex.message);
    }
};

exports.getBookById = async (id) => {
    try {
        const book = await Book.findById(id);
        return book;
    } catch (ex) {
        throw new Error(ex.message);
    }
};

// Create a new book that will be added to the database
exports.createBook = async (bookData) => {
    try {
        const book = await new Book(bookData);
        const newBook = await book.save();
        return newBook;
    } catch (ex) {
        throw new Error(ex.message);
    }
};
