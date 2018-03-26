'use strict';
var EAPP = require('../src/constants/constants.js');

var MAIN_DB = EAPP.MAIN_DB;

var express = require('express');
var loginRouter = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = EAPP.MONGO_URL;
var passport = require('passport');

var router = function(nav){
loginRouter.route('/signup')
.post(function(req,res){
      MongoClient.connect(url, function(err, db) {
      var dbo = db.db(MAIN_DB);
     
          var user={
          username: req.body.username,
          password:req.body.password
          };
         dbo.collection("eausers").insert(user,function(err, result) {
             req.login(result,function(){
             res.redirect('/auth/profile');
          });
         
         db.close();
});
          
    
      });

    });
loginRouter.route('/signin')
.post(passport.authenticate('local',{
    failureRedirect:'/'}),function(req,res){
     res.redirect('/auth/profile');
});

loginRouter.route('/profile')
    .all(function(req,res,next){
    if(!req.user){
        res.redirect('/');
    }
    next();
})
    .get(function(req,res){
    res.render('Home',{uname:req.user.username,title:'I am Mitarth',nav:EAPP.NAVMENU});

})
return loginRouter;
};

module.exports= router;