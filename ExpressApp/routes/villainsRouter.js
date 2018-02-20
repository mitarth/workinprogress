'use strict';
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
    res.render('Villains',{
        nav:nav,
        menu:villains });
});


villainsRouter.route('/:id')
.get(function(req,res){
    res.render('Help');
});

return villainsRouter;
};


module.exports= router;