'use strict';

const express = require('express')
const router = express.Router()

const bookService = require('./bookService') 

// GET /books/
router.get('/', async (req, res, next) => {
    try {
      // 1. Fetch all books from database
      const books = await bookService.listBooks()
      // 2. Respond with list of books
      res.status(200).send({data: books})
    } catch (e) {
      // 3. If error, send to the error handler
      res.status(500).json({"error": "internal server error"});
    }
  })

// POST /books/
router.post('/', async (req, res, next) => {
  const { serviceName, location, description, participantCount } = req.body;
  if ( !serviceName || serviceName === "" ) {
    res.status(400).json({ "error": "serviceName must be provided" });
    return;
}
    try {
      const book = await bookService.createBook({ serviceName, location, description, participantCount });
      res.status(200).json({data: book});
    } catch (ex) {
        console.log(ex.message, "ex1");
        res.status(500).json({"error": "internal server error from posting"});
    }
  })

exports.router = router;
