'use strict';
var express = require('express');
var cookie = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');
var EAPP = require('./src/constants/constants.js');
var app = express();
var port = EAPP.PORT;
var nav =EAPP.NAVMENU;
var url = EAPP.MONGO_URL;

var bodyParser = require('body-parser');
var heroRouter = require('./routes/heroRouter')(nav);
var villainsRouter = require('./routes/villainsRouter')(nav);
var loginRouter = require('./routes/loginRouter')(nav);
var loginController = require('./src/controllers/loginController')
app.use(express.static('public'));
app.set('views','./src/views');
var MongoClient = require('mongodb').MongoClient;

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
/*app.post('/', function (req, res) {
   var countValue = req.body.countValue;
   console.log("CountValue is", countValue);
});*/
app.get('/', function (req, res) {
    console.log('NAME:   '+req.body.name);
	res.render('login',{nav:EAPP.NAVMENU});
}); 
app.get('/test',function(req,res){
    var message = loginController.getCred;
	res.json({message : loginController.getCred});
        });

//React Requests
app.post('/', function (req, res) {
   console.log('NAMEE:   '+req.body.name);
	res.render('login',{title:'I am Mitarth',nav:EAPP.NAVMENU});
}); 
app.post('/auth',function (req, res) {
    console.log('Auth :   '+req.body.name);
    MongoClient.connect(url, function(err, db) {
    console.log('Mongo connection');    
      var dbo = db.db("zoom");
    dbo.collection("eausers").findOne({username:req.body.name},function(err, result) {
        console.log('Walla'+result);
        res.json({message:result});
        db.close();
    });
    });
	
}); 
app.listen(port, function(error){
	if(error ) {
		console.log(error);
	}
	else {
		console.log('Express is listening to '+port);
	}
});
 