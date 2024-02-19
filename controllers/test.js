require('colors')

const test = async (req, res) => {
    try
    {
        res.send("<h1>Hello, Universe!</h1>")

        console.log("OK".bgWhite)

    } catch (error)
    {
        console.log(`${error}`.bgRed.white)
    }
}

module.exports = test