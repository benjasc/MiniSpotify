'use strict'

let express = require('express');
let UserController = require('../controllers/user')
let api = express.Router();

api.post('/register', UserController.saveUser);
api.post('/login', UserController.login);

module.exports = api;