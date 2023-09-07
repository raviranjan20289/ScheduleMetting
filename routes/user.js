const express = require('express');

const router = express.Router();


const messageControllers = require('../controllers/user');

router.post('/register', messageControllers.postRegister);

router.get('/getRegister', messageControllers.getRegister);



module.exports = router;