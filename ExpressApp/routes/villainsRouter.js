'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/zoom";
var objectId = require('mongodb').ObjectID;

var express = require('express');
var villainsRouter = express.Router();
var villains = [{
        id:1,    
        name:"Joker"
    },{
        id:2,
        name:"Lex Luthor"
    },{
        id:3,
        name:"Cheetah"
    }
                              ];

var router = function(nav){
villainsRouter.route('/')
.get(function(req,res){
    MongoClient.connect(url, function(err, db) {
      var dbo = db.db("zoom");
      dbo.collection("Villains").find({}).toArray(
          function(err, result) {
        res.render('Villains',{
        nav:nav,
        menu:result});
        db.close();
    });
    });
    
    
   /* res.render('Villains',{
        nav:nav,
        menu:villains });*/
});


villainsRouter.route('/:id')
.get(function(req,res){
    var id= new objectId(req.params.id);
    MongoClient.connect(url, function(err, db) {
  var dbo = db.db("zoom");
  dbo.collection("Villains").findOne({_id:id},function(err, result) {
    res.render('Villain',{
        villain:result,
        nav:nav
    });
    
});
        db.close();
});
});

return villainsRouter;
};


module.exports= router;