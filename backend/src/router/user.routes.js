const {Router} = require('express');
const UserController = require('../controllers/user.controller');
const router = new Router()

router.get('/delete/:id', UserController.delete);

module.exports = router