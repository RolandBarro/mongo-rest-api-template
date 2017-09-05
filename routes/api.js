
var express = require('express');
var router = express.Router();

//models
Users = require('../models/users');
Users.methods(['get', 'put', 'post', 'delete']);
Users.register(router,'/users');

Employees = require('../models/employees');
Employees.methods(['get', 'put', 'post', 'delete']);
Employees.register(router,'/employees');

module.exports = router;