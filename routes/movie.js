var express = require('express');
var route=express.Router();

var moviesController= require('../controllers/moviesControllers.js');
route.get('/all',moviesController.getAllMovie);
     .post('/add',moviesController.addNewMovie);
res.send('respond with a resource');

module.exports=router;
