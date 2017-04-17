var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchema = new Schema({
  content     : String,
  userid      : {type: Schema.Types.ObjectId, ref: 'User'},
  questionid  : {type: Schema.Types.ObjectId, ref: 'Question'},
  upvote      : [{type: Schema.Types.ObjectId, ref: 'User'}],
  downvote    : [{type: Schema.Types.ObjectId, ref: 'User'}]
})

var Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer
