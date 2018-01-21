var movies=require('./moviedata');
var dbservice=require('./services/dbservice.js');
exports.getAllMovie function(req,res,next){
  var db=dbservice.database;
  var movieCollection=db.collection("movies");
  movieCollection.find().toArray().then(function(result)){
    var outputJson={
      "isSuccess":true,
      "data":result
    }
    return res.json(outputJson);
  });

};
exports.addNewMovie=function(req,res,next){
  var db=dbService.database,
  movie = req.body,
  moviesCollection=db.collection("movies");
  movieCollection.insert(movie).then(function(save_data){
    return res.json({
      "isSuccess":true
    });
  });

}
