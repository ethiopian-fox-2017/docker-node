var express = require('express');
var router = express.Router();
var constAnswer = require('../controllers/answer');

router.get('/', constAnswer.getAll)
router.post('/', constAnswer.createAnswer)
module.exports = router
