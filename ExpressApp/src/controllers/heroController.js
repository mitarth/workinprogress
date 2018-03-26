var EAPP = require('../constants/constants.js');

var MongoClient = require('mongodb').MongoClient;
var url = EAPP.MONGO_URL;
var objectId = require('mongodb').ObjectID;
var HERO_COLLECTION = EAPP.HERO_COLLECTION;
var MAIN_DB = EAPP.MAIN_DB;

var heroController = function(heroService,nav){
    var getIndex = function(req,res){
    MongoClient.connect(url, function(err, db) {
      var dbo = db.db(MAIN_DB);
      dbo.collection(HERO_COLLECTION).find({}).toArray(
          function(err, result) {
        res.render('Heroes',{
        nav:nav,
        menu:result});
        db.close();
    });
    });
  
    
};
    
    var getById = function(req,res){
    var id= new objectId(req.params.id);
    MongoClient.connect(url, function(err, db) {
  var dbo = db.db(MAIN_DB);
  dbo.collection(HERO_COLLECTION).findOne({_id:id},function(err, result) {
    res.render('Hero',{
        hero:result,
        nav:nav
    });
    
});
        db.close();
});
   
    
    
};
    
    
    
    return {
        getIndex : getIndex,
        getById : getById
    }
}


module.exports = heroController;