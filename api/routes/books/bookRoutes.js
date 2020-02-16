'use strict';

const express = require('express');
const router = express.Router();

const bookService = require('./bookService');

// GET /books/
router.get('/', async (req, res, next) => {
    try {
        const books = await bookService.listBooks();
        res.status(200).json({data: books});
    } catch (ex) {
        console.log(ex);
        res.status(500).json({"error": "internal server error"});
    }
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const book = await bookService.getBookById(id);
        res.status(200).json({data: book});
    } catch (ex) {
        console.log(ex);
        res.status(500).json({"error": "internal server error"});
    }
});

router.post('/', async (req, res, next) => {
    const { title, authorName, rating, comment } = req.body;

    if ( !title || title === "" ) {
        res.status(400).json({ "error": "title must be provided" });
        return;
    }

    if ( !authorName || authorName === "" ) {
        res.status(400).json({ "error": "authorName must be provided" });
        return;
    }

    try {
        const book = await bookService.createBook({ title, authorName, rating, comment });
        res.status(200).json({data: book});
    } catch (ex) {
        console.log(ex);
        res.status(500).json({"error": "internal server error"});
    }
});


exports.router = router;
