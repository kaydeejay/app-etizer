$(document).ready(function() {
  $("#searchButton").on("click", function() {
    const query = $("#recipeSearch")
      .val()
      .trim();
    const search = { searchTerm: query };
    $.ajax({
      url: "/api/search",
      method: "POST",
      data: search
    }).then(result => console.log(result));
    // $.ajax({
    //   // call the backend 'search' route, which will query spoonacular api
    //   url: "/api/search",
    //   method: "GET"
    // }).then(result => {
    //   console.log(result);
    // });
  });
});
