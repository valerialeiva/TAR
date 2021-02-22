const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        identification: { type: String, required: true },
        userName: { type: String, required: true },
        lastName: { type: String, required: true },
        age: { type: Number, required: true },
        rol: {
            idRol: { type: Number, required: true },
            rolName: { type: String, required: true }
        },
        email: {type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)