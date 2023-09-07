const express = require('express');

const router = express.Router();


const messageControllers = require('../controllers/user');

router.post('/register', messageControllers.postRegister);

router.get('/getRegister', messageControllers.getRegister);

router.post('/login' , messageControllers.postLogin)

router.get('/login',messageControllers.login);


module.exports = router;