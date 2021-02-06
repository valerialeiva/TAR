const mongoose = require('mongoose')

    mongoose.connect("mongodb+srv://admin:admin@clusterabril.vivdf.mongodb.net/DbAbril?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db