$(document).ready(function() {
  $("#searchButton").on("click", function() {
    var recipeData = $("#recipeSearch")
      .val()
      .trim();
    $.ajax({
      // call the backend 'search' route, which will query spoonacular api
      url: "/api/search",
      method: "GET",
      data: recipeData
    }).then(result => {
      console.log("hi nancy", result);
    });
  });
});
