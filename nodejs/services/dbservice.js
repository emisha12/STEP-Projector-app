var MongoClient=require('mongodb').MongoClient;
exports.createConnection=function(){
  MongoClient.connect('mongodb://emisha:root@ds039195.mlab.com:39195/projector12').then(function(client)){
  console.log("connected to mongodb");
  exports.database=client.db("projector12");
});
};
