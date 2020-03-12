/* eslint-disable no-unused-vars */
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

  $(document).ready(function() {
    $(function() {
      $(".suggestedSearch").on("click", function() {
        let searchTerm = $(this)
          .text()
          .trim();
        // console.log("query", query);
        // }).then(result => {
        // console.log("result", result);
        // location.href = "/results.html";
        $.ajax({
          url: `/api/search/${searchTerm}`,
          method: "POST"
        }).then(function(response) {
          console.log(response);
          // console.log("LOOK HERE", response);
          // for (let i = 0; i < response.results.length; i++) {
          // xtitle = response.results[i].title;
          // const liTag = $("<li>" + xtitle + "</li>");
          // const recipeHolder = $("#recipeId");
          // recipeHolder.append(liTag);
        });
      });
    });
  });
});
