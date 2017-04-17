const db = require('../models/question');
// const jwt = require('jsonwebtoken');

let getAll = function(req, res) {
  let populateQuery = [{path: 'userid', select:['username','email']}, {path: 'answerid', select: ['content','userid']}]
  db.find({}).populate(populateQuery).exec(function(err, user){
    if (!err) {
      res.send(user)
    }
  })
}

let createQuestion = function(req, res) {
  db.findOne(function(err, data) {
    if (err) {
      res.send("Data Error !")
    } else {
      let newUser = new db({
        content     : req.body.content,
        userid      : req.body.userid,
        answerid    : [],
        upvote      : [],
        downvote    : []
      })
      newUser.save(function(err, data) {
        if (err) {
          res.send(err)
        } else {
          res.send("Question success created !")
        }
      })
    }
  })
}

let updateAnswerId = function(req, res) {
  db.findByIdAndUpdate(req.params.id,
    {$push : {"answerid" : req.body.answerid}},
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

let deleteQuestion = function(req, res) {
  db.findByIdAndRemove(req.params.id,
    function(err, data) {
      if (err) {
        res.send(err.message)
      } else {
        res.send("Question success deleted !")
      }
    })
}

let oneQuestion = function(req, res) {
  db.findOne({_id: req.params.id}, function(err, result) {
    if (!err) {
      res.send({success: true, msg: "Success", data: result})
    } else{
      res.send({success: false, msg: "Gagal get data",  data:null})
    }
  })
}

// kode cadangan
// db.findById(req.params.id, function(err, question) {
//   if (err) {
//     res.send(err)
//   } else {
//
//     db.update(req.params.id, {$push : {"answerid" : req.body.answerid}},
//     {safe: true, upsert: true, new: true}, function(err, model) {
//       if (err) {
//         res.send(err)
//       } else {
//         res.send(model)
//       }
//     })
//   }
// })
module.exports = {
  getAll,
  createQuestion,
  updateAnswerId,
  deleteQuestion,
  oneQuestion
}
