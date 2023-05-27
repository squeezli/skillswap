const {Router} = require('express')
const router = new Router()
const jwt = require('jsonwebtoken')
const AuthController = require('../controllers/auth.controller')


router.post("/registration", AuthController.register)
router.post("/login", AuthController.login)

module.exports = router