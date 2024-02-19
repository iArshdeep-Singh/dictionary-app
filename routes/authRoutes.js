const express = require('express')
const test = require('../controllers/test')
const i = require('../controllers/authController')

const router = express.Router()

// test
router.get('/', test)

// signup
router.post('/signup', i.signupController)

// login
router.post('/login', i.loginController)

module.exports = router