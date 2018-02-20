var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/zoom";
var objectId = require('mongodb').ObjectID;

var heroController = function(heroService,nav){
    var getIndex = function(req,res){
    MongoClient.connect(url, function(err, db) {
      var dbo = db.db("zoom");
      dbo.collection("Heroes").find({}).toArray(
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
  var dbo = db.db("zoom");
  dbo.collection("Heroes").findOne({_id:id},function(err, result) {
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