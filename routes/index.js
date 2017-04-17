var express = require('express');
var router = express.Router();
var contUser = require('../controllers/user');


router.post('/login', contUser.loginUser)


module.exports = router;
