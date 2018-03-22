var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/zoom";
var objectId = require('mongodb').ObjectID;

var loginController = function(){
    var getCred = function(req,res){
    var uname = 'Vaid';
    var message = 'User not found';
        console.log('uname:  '+uname);
    MongoClient.connect(url, function(err, db) {
      var dbo = db.db("zoom");
    dbo.collection("eausers").findOne({username:uName},function(err, result) {
        console.log('Walla');
        res.send('Walla');
        db.close();
    });
    });
   
};
    

    
    
    
    return {
        getCred : getCred
    }
}


module.exports = loginController;