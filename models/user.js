var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username  : String,
  email     : String,
  password  : String,
  question  : [{type : Schema.Types.ObjectId, ref: 'Question'}],
  answer    : [{type : Schema.Types.ObjectId, ref: 'Answer'}]
})

var User = mongoose.model('User', userSchema);

module.exports = User
