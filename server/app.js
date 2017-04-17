let express = require('express'),
    index = require('./routes/index'),
    users = require('./routes/users'),
    questions = require('./routes/questions'),
    monggo = require('mongoose'),
    bodyPars = require('body-parser'),
    cors = require('cors'),
    app = express()



app.use(bodyPars.json())
app.use(bodyPars.urlencoded({extended:false}))
app.use(cors());

app.use('/',index);
app.use('/users',users);
app.use('/questions',questions);

monggo.connect('mongodb://hacktivoverflow:12345@ds163020.mlab.com:63020/backend-hacktivoverflow')
monggo.connection.on('connected', function() {
  console.log('mongo connected');
})
app.listen(3000, function() {
  console.log('server is running...');
})