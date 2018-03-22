'use strict';
var express = require('express');
var cookie = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');

var app = express();
var port = 3001;
var nav =[{name:'Heroes',link:'Heroes'},{name:'Villains',link:'Villains'}]

var bodyParser = require('body-parser');
var heroRouter = require('./routes/heroRouter')(nav);
var villainsRouter = require('./routes/villainsRouter')(nav);
var loginRouter = require('./routes/loginRouter')(nav);
var loginController = require('./src/controllers/loginController')
app.use(express.static('public'));
app.set('views','./src/views');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/zoom";
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
	res.render('login',{title:'I am Mitarth',nav:[{name:'Heroes',link:'Heroes'},{name:'Villains',link:'Villains'}]});
}); 
app.get('/test',function(req,res){
    var message = loginController.getCred;
	res.json({message : loginController.getCred});
        });
app.post('/', function (req, res) {
   console.log('NAMEE:   '+req.body.name);
	res.render('login',{title:'I am Mitarth',nav:[{name:'Heroes',link:'Heroes'},{name:'Villains',link:'Villains'}]});
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
 