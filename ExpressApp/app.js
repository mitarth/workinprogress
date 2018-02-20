'use strict';
var express = require('express');
var cookie = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');

var app = express();
var port = 3000;
var nav =[{name:'Heroes',link:'Heroes'},{name:'Villains',link:'Villains'}]

var bodyParser = require('body-parser');
var heroRouter = require('./routes/heroRouter')(nav);
var villainsRouter = require('./routes/villainsRouter')(nav);
var loginRouter = require('./routes/loginRouter')(nav);
app.use(express.static('public'));
app.set('views','./src/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookie());
app.use(session({secret:'batman'}));
require('./src/config/passport')(app);
app.set('view engine','.ejs');

app.use('/auth/Heroes',heroRouter);
app.use('/auth/Villains',villainsRouter);
app.use('/auth',loginRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/', function (req, res) {
	res.render('login',{title:'I am Mitarth',nav:[{name:'Heroes',link:'Heroes'},{name:'Villains',link:'Villains'}]});
}); 

app.listen(port, function(error){
	if(error ) {
		console.log(error);
	}
	else {
		console.log('Express is listening to '+port);
	}
});
 