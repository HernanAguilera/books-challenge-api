'use strict'

var mongoose = require('mongoose')
var url = `mongodb://localhost:27017/books`

function connect(fn) {
    mongoose.connect(url, (err, db) => {
        console.log('Conexión a base de datos establecida')

        fn()
    })
}

module.exports = connect