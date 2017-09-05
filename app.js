var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var dbURI = 'mongodb://admin:Oct072006@ds123124.mlab.com:23124/payroll_app';
mongoose.connect(dbURI,{});
var db = mongoose.connection;

//Express
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Routes
app.get('/', function(req, res){
	res.send('API main page');
});

app.use('/api', require('./routes/api'));

app.listen(3000);
console.log('listening at port 3000');

