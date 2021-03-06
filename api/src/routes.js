const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/User')

routes.post('/user', UserController.create)
routes.get('/user', UserController.list)
routes.delete('/user', UserController.delete)

module.exports = routes
