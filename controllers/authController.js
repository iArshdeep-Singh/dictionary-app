require('colors')
const User = require('../models/userModel')


// Sign Up
const signupController = async (req, res) => {
    try
    {
        const {name, username, password} = req.body

        // validation
        if (!name && username && password)
        {
            return res.send({message: "Name is required."})
        }
        if (name && !username && password)
        {
            return res.send({message: "Username is required."})
        }
        if (name && username && !password)
        {
            return res.send({message: "Password is required."})
        }
        if (!name || !username || !password)
        {
            return res.send({message: "All fields are required."})
        }

        // check user
        const existingUser = await User.findOne({username: username})

        // if existing user
        if (existingUser)
        {
            return res.status(200).send({
                success: false,
                message: "Already registered, please sign in."
            })
        }

        // register user
        await new User({
            name,
            username,
            password
        }).save()

        const user = await User.findOne(req.body).select('-password')

        res.status(201).send({
            success: true,
            message: "User registered successfully.",
            user
        })
    } catch (error)
    {
        console.log(`|---${error}---|\n`.bgRed.white, error)
        res.status(500).send({
            success: false,
            message: "Error in registeration.",
            error
        })
    }
}


// login
const loginController = async (req, res) => {
    try
    {
        const {username, password} = req.body

        // validation
        if (!username || !password)
        {
            return res.status(200).send({
                message: "Please enter username and password."
            })
        }

        // check user
        const user = await User.findOne({username}).select('-password')

        if (!user)
        {
            res.status(200).send({
                success: false,
                message: "User is not registered, please create account before login."
            })
        }

        if (user)
        {
            res.status(200).send({
                success: true,
                message: "Login successfully.",
                user
            })
        }

    } catch (error)
    {
        console.log(`|---${error}---|`.bgRed.white)
        res.status(500).send({
            success: false,
            message: "Error in login.",
            error
        })
    }
}


module.exports = {signupController, loginController}