$(document).ready(function() {
  $("#searchButton").on("click", function() {
    $.ajax({
      // call the backend 'search' route, which will query spoonacular api
      url: "/api/search",
      method: "GET"
    }).then(result => {
      console.log(result);
    });
  });
});
