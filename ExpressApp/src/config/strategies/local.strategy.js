var passport = require('passport');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/zoom';

LocalStrategy = require('passport-local').Strategy;

module.exports = function(){
    passport.use(new LocalStrategy({
        usernameF:'username',
        passwordF:'password'
    },function(username,password,done){
         MongoClient.connect(url, function(err, db) {
      var dbo = db.db('zoom');
      
         dbo.collection("eausers").findOne({username:username},function(err, result) {
             var user = result;
            if(password===user.password){
                console.log('Welcome '+username);
                done(null,user); 
                
            }
             else{
             done('Incorrect Password',null);
             }
         });
         
         db.close();
});

        
    }));
};