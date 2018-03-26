'use strict';
var EAPP = require('../src/constants/constants.js');
var MongoClient = require('mongodb').MongoClient;
var url = EAPP.MONGO_URL;

var MAIN_DB = EAPP.MAIN_DB;
var VILLAIN_COLLECTION = EAPP.VILLAIN_COLLECTION;
var objectId = require('mongodb').ObjectID;

var express = require('express');
var villainsRouter = express.Router();
var villains = [{"name" : "Joker",
    "id" : 1,
    "imageUrl" : "/images/Joker"},
    {"name" : "Lex Luthor",
    "id" : 2,
    "imageUrl" : "/images/LexLuthor"},
    {"name" : "RaAsGhul",
    "id" : 3,
    "imageUrl" : "/images/RaAsGhul"},
    {"name" : "Zoom",
    "id" : 4,
    "imageUrl" : "/images/Zoom"},
    {"name" : "Sinestro",
    "id" : 5,
    "imageUrl" : "/images/Sinestro"}];

var router = function(nav){
villainsRouter.route('/')
.get(function(req,res){
    MongoClient.connect(url, function(err, db) {
      var dbo = db.db(MAIN_DB);
      dbo.collection(VILLAIN_COLLECTION).find({}).toArray(
          function(err, result) {
        res.render('Villains',{
        nav:nav,
        menu:result});
        db.close();
    });
    });
    
});


villainsRouter.route('/:id')
.get(function(req,res){
    var id= new objectId(req.params.id);
    MongoClient.connect(url, function(err, db) {
  var dbo = db.db(MAIN_DB);
  dbo.collection(VILLAIN_COLLECTION).findOne({_id:id},function(err, result) {
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