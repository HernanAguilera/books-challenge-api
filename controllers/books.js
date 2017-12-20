'use strict'

const Book = require('../models/Book')

function list(req, res) {
    Book.find({}, (error, books) => {
        if(error) res.status(500).send(`Ha ocurrido un error al obtener los elementos: ${error}`)
        res.send(books)
    })
}

function create(req, res) {

    var book = new Book({
        name: req.body.name,
        author: req.body.author,
        isbn: req.body.isbn,
        genre: req.body.genre
    })

    book.save((error, bookSaved) => {
        if(error) return res.status(500).send(`Ha ocurrido un error al intentar guardar el elemento: ${error}`)

        res.send(bookSaved)
    })
}

function get(req, res) {
    var id = req.params.id

    Book.findById(id, (error, book) => {
        if(error) return res.status(500).send(`Ha ocurrido un error al intentar obtener el elemento: ${error}`)

        if(!book) return res.status(404).send('El libro no ha podido ser encontrado')

        res.send(book)
    })
}

function update(req, res) {
    var id = req.params.id
    var data = req.body
    console.log(data)
    Book.findByIdAndUpdate(id, data, (error, book) => {
        if(error) return res.status(500).send('Ha ocurrido un error')
        
        res.send(Object.assign(book, data))
    })
}

function remove(req, res) {
    var id = req.params.id

    Book.findById(id, (error, book) => {
        if(error) return res.status(500).send({message: `se ha producido un error al buscar el elmento solicitado: ${error}`})

        if(!book) return res.status(404).send('El libro no ha podido ser encontrado')

        book.remove(error => {
            if(error) return res.status(500).send({message: `se ha producido un error al intentar eliminar el elemento: ${error}`})

            res.send('El libro ha sido eliminado :-)')
        })
    })
}

module.exports = {
    list,
    create,
    get,
    update,
    remove
}