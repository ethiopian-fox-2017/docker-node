var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
  content   : String,
  userid    : {type : Schema.Types.ObjectId, ref: 'User'},
  answerid  : [{type : Schema.Types.ObjectId, ref: 'Answer'}],
  upvote    : [{type : Schema.Types.ObjectId, ref: 'User'}],
  downvote  : [{type : Schema.Types.ObjectId, ref: 'User'}]
})

var Question = mongoose.model('Question', questionSchema);

module.exports = Question
