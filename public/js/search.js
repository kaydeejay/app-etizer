$(document).ready(function(){
  $("#searchButton").on("click", function(){
    let queryURL = "https://spoonacular.com/food-api/docs&apikey="
    let apiKey = process.env.SPOON_APIKEY;
    $.ajax({
      url: queryURL + apiKey,
      method: "GET"
    }).then(function(data){
      console.log(data);
    });
  });
});