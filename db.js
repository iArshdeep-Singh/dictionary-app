const mongoose = require('mongoose')
const dotenv = require('dotenv')
require('colors')

dotenv.config()
const port = process.env.MONGO_PORT
const host = process.env.HOST

const url = `mongodb://${host}:${port}/dictionary_app`

const connectDB = async () => {
    try
    {
        await mongoose.connect(url)
        console.log("|---DATABASE CONNECTED---|".bgGreen.black)
    } catch (error)
    {
        console.log(`${error}:\nSomething went wrong!`.bgRed.white)
    }
}

module.exports = connectDB