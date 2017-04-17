var express = require('express');
var router = express.Router();
var contUser = require('../controllers/user');

router.get('/', contUser.getAll)
router.post('/', contUser.createUser)

router.put('/question/:id', contUser.updateQuestion)
router.put('/answer/:id', contUser.updateAnswer)

module.exports = router
