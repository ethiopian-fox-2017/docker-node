const db = require('../models/answer');
// const jwt = require('jsonwebtoken');

let getAll = function(req, res) {
  var populateQuery = [{path: 'userid', select:['username', 'email']}, {path: 'questionid', select:['content']}]
  db.find({}).populate(populateQuery).exec(function(err, data) {
    if (!err) {
      res.send(data)
    }
  })
}

let createAnswer = function(req, res) {
  db.create({
    content     : req.body.content,
    userid      : req.body.userid,
    questionid  : req.body.questionid,
    upvote      : [],
    downvote    : []
  }, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send("Answer success created !")
    }
  })
}

module.exports = {
  getAll,
  createAnswer
}
