'use strict'

const express = require('express')
const booksController = require('./controllers/books')
const api = express.Router()

api.get('/books', booksController.list)
api.post('/books', booksController.create)
api.get('/books/:id', booksController.get)
api.put('/books/:id', booksController.update)
api.delete('/books/:id', booksController.remove)

module.exports = api