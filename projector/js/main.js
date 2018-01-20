console.log("this file has loaded");
$.ajax({
  type:"GET",
  url:"https://api.myjson.com/bins/tls49",
  datatype:"json",
  success:function(response){
    //console.log("Data from success",response);
    var data=formObject(response);
    constructDOM(data);
},
error:function(err){
  console.log("Error in GET method",err);
}
});

function formObject(response){
  var flag=[],categoryObject=[];
  var n=response.length;
  for(var i=0;i<n;i++){
    var movie=response[i];
    var index=flag.indexOf(movie.language);
    //console.log("movie",movie);
    //console.log("language",movie.language);
    if(index>=0){
categoryObject[index].movies.push(movie);
continue;
    }else {
        flag.push(movie.language);
    }
    var objectSchema={
      "category":movie.language,
      "movies":[]
    }
    objectSchema.movies.push(movie);
    categoryObject.push(objectSchema)
    console.log("categoryObject",categoryObject);
  //  console.log(flag);
  }
  console.log("formObject response",response);
  return categoryObject;
}
function constructDOM(data){
  var categoryContent=[];
  for(var i=0;i<data.length;i++){
    var objectSchema=data[i];
    console.log("constructDOM",objectSchema);
    var categoryTitle=$('<h3 class="categoryName">'+objectSchema.category+'</h3>');
categoryContent.push(categoryTitle);
}
  $('.content').html(categoryContent);

}
