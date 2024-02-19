const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
    }
})

const Users = mongoose.model("dictionary_users", userSchema)

module.exports = Users