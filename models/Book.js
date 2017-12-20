'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = Schema({
    name: {type: String, maxlength: 256, required: true},
    author: {type: String, maxlength: 256, required: true},
    isbn: { type: String, minlength: 10, maxlength: 10, required: true},
    genre: {type: String, 
            enum: [
                'Comedy',
                'Drama',
                'Fantasy',
                'Horror',
                'Humor',
                'Poetry',
                'Science Fiction',
            ], 
            required: true},
})

module.exports = mongoose.model('Books', BookSchema)