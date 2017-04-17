let routes = require('express').Router(),
    control = require('../controllers/userController')

//get user
routes.get('/', control.getUser)

//post user
routes.post('/', control.postUser)

module.exports = routes;