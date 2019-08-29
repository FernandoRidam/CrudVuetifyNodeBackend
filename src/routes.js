const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/user', UserController.create);
routes.get('/users', UserController.read);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);

module.exports = routes;