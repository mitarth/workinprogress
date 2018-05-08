'use strict';
var EAPP = require('../src/constants/constants.js');
var HERO_COLLECTION = EAPP.HERO_COLLECTION;
var MAIN_DB = EAPP.MAIN_DB;
var express = require('express');
var heroRouter = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = EAPP.MONGO_URL;
var objectId = require('mongodb').ObjectID;

var heroes = [
{name:'Batman',id:1,imageUrl:'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_batman_588c0b6b7e2e88.03395664_589110907cb905.89801067.jpg?itok=vuUz8U8D',city:'Gotham',identity : 'Bruce Wayne', usp : '9th level intellect'},
{name:'Superman',id:2,imageUrl:'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_superman_588c0b2b7e4894.14006222_589110299aa510.60892721.jpg?itok=0O5JEhrd',city:'Metropolis',identity : 'Clark Kent',    usp : 'Super Strength'},
{name:'Flash',id:3,imageUrl:'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_flash_588c0c78096793.56539878_58911183a7a817.13114786.jpg?itok=51sOwUR9',city:'Central City',identity : 'Barry Allen',        usp : 'Super speed'},
{name:'Wonder Woman' ,id:4, imageUrl:'https://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_wonderwoman_588c0ed37bfc73.21006806_589110f430e637.19481409.jpg?itok=BazXL1g2',city:'New York',identity : 'Diana Prince',        usp : 'Super strength'},
{name:'Green Lantern',id:5,imageUrl:'https://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_greenlantern_588c0cbdb655b1.03755951_58911193b86ee0.18027458.jpg?itok=_l5Tds6G',city:'New York',identity : 'Hal Jordan',        usp : 'Magical Ring'},
{name:'Aquaman',id:6,imageUrl:'https://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_aquaman_588c0ba8f18257.29894859_589111638cff75.10820220.jpg?itok=OPGnWStb',city:'Atlantic City',identity : 'Arthur Curry',       usp : 'Super strength, Marine life Control'},
{name:'Cyborg',id:7, imageUrl:'https://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_cyborg_588c0bec1db114.91404563_589111406dd3c2.36803058.jpg?itok=E9zlLUra',city:'Central City',identity : 'Victory Stone',        usp : 'Cyber control'},
{name:'Hawkgirl',id:8,imageUrl:'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/hawkgirl_192x291_53c5882f242161.66203050.jpg?itok=sKWJv7qH',city:'Egypt',identity : 'Shanaya ',        usp : 'Magical Maze'},
{name:'Green Arrow',id:9,imageUrl:'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/greenarrow_192x291_53c5882189d358.67363982.jpg?itok=efWNrqMC',city:'Starling City',identity : 'Oliver Queen',usp : 'Archery'}
];




var router = function(nav){
var heroController = require('../src/controllers/heroController')(null,nav);
heroRouter.use(function(req,res,next){
    if(!req.user){
        res.redirect('/');
    }
    next();
    });    
    

    
    
heroRouter.route('/')
.get(heroController.getIndex);

heroRouter.route('/addHero')
.get(function(req,res){
  hero = {name:'Green Arrow',id:15,imageUrl:'',city:'Starling City',identity : 'Oliver Queen',usp : 'Archery'}
    
  MongoClient.connect(url, function(err, db) {
  var dbo = db.db(MAIN_DB);
  dbo.collection(HERO_COLLECTION).insertMany(hero,function(err, result) {
    res.json(result);
    db.close();
});
});
    
});


heroRouter.route('/:id')
.get(heroController.getById);


return heroRouter;
};

module.exports= router;