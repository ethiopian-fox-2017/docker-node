var express = require('express');
var router = express.Router();
var constQuestion = require('../controllers/question');

router.get('/', constQuestion.getAll)
router.post('/', constQuestion.createQuestion)
router.delete('/:id', constQuestion.deleteQuestion)
router.get('/:id', constQuestion.oneQuestion)


router.put('/:id', constQuestion.updateAnswerId)


module.exports = router
