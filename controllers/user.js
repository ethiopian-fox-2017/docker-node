const db = require('../models/user');
const jwt = require('jsonwebtoken');
const pwh = require('password-hash');
require('dotenv').config()

let getAll = function(req, res) {
  let populateQuery = [{path: 'question', select:['content','userid']}, {path: 'answer', select: ['content','userid']}]
  db.find({}).populate(populateQuery).exec(function(err, user){
    if (!err) {
      res.send(user)
    }
  })
}

let createUser = function(req, res) {
  let newUser = new db({
    username : req.body.username,
    email    : req.body.email,
    password : pwh.generate(req.body.password),
    question : [],
    answer   : []
  })

  newUser.save(function(err, data) {
    if (!err) {
      let newToken = jwt.sign({username: data.username}, process.env.SECRET_WORD)
      res.send({success: true, msg:'User success created', token: newToken, id: data._id})
    } else {
      res.send({success: false, msg: err})
    }
  })
}

let updateQuestion = function(req, res) {
  db.findByIdAndUpdate(req.params.id,
    {$push : {"question" : req.body.question}},
    {safe: true, upsert: true, new: true},
    function(err, quest) {
      if (err) {
        res.send(err)
      } else {
        res.send(quest)
      }
    }
  )
}

let updateAnswer = function(req, res) {
  db.findByIdAndUpdate(req.params.id,
    {$push : {"answer" : req.body.answer}},
    {safe: true, upsert: true, new: true},
    function(err, answer) {
      if (err) {
        res.send(err)
      } else {
        res.send(answer)
      }
    }
  )
}

let loginUser = function(req, res) {
  db.findOne({'username' : req.body.username}, function(err, user) {
    if (err || user == null) {
      res.send({success: false, msg: 'username not found !'})
    } else {
      if (pwh.verify(req.body.password,user.password)) {
        let newToken = jwt.sign({username: user.username}, process.env.SECRET_WORD)
        res.send({success: true, msg: 'Your Login success !', token: newToken, id: user._id})
      } else {
        res.send({success: false, msg: 'Username or Password is wrong'})
      }
    }
  })
}


module.exports = {
  getAll,
  createUser,
  updateQuestion,
  updateAnswer,
  loginUser
}
