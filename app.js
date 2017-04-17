const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const index = require('./routes/index');
const question = require('./routes/question');
const answer = require('./routes/answer');
const user = require('./routes/user');
mongoose.connect('mongodb://danilags:daniel1234@ds163010.mlab.com:63010/stackoverflow');
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.use('/', index)
app.use('/user', user)
app.use('/question', question)
app.use('/answer', answer)

app.listen(3000, function() {
  console.log("Server Jalan !");
})
