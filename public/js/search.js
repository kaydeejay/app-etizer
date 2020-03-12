$(document).ready(function() {
  $(".recipeCards").empty();
  //Random Recipe
  let queryURL =
    "https://api.spoonacular.com/recipes/random?number=1&apiKey=0bf3d04ff9744651aa6c76a5548b186a";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    //console.log(response);

    let results = response.recipes;

    for (i = 0; i < results.length; i++) {
      let queryURL =
        "https://api.spoonacular.com/recipes/" +
        results[i].id +
        "/summary?apiKey=0bf3d04ff9744651aa6c76a5548b186a";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        let title = response.title;
        let summary = response.summary;
        let imageURL =
          "https://spoonacular.com/recipeImages/" +
          response.id +
          "-312x231.jpg";

        // Cards
        let cardDiv = $("<div>");
        cardDiv.addClass("card mb-3").addClass("recipe-card");
        cardDiv.attr("data-recipeId", response.id);

        let row = $("<div>");
        row.addClass("row").addClass("no-gutters");
        let imgCol = $("<div>");
        imgCol.addClass("col-md-4");

        let img = $("<img>");
        img.addClass("card-img");
        img.attr("src", imageURL);

        let contentCol = $("<div>");
        contentCol.addClass("col-md-8");

        let bodyDiv = $("<div>");
        bodyDiv.addClass("card-body");

        let a = $("<a>");
        let h5 = $("<h5>");
        h5.addClass("card-title");
        h5.text(title);
        a.append(h5);

        let p = $("<p>");
        p.addClass("card-text");
        p.html(summary);

        bodyDiv.append(a).append(p);
        contentCol.append(bodyDiv);
        imgCol.append(img);
        row.append(imgCol).append(contentCol);
        cardDiv.append(row);
        $(".recipeCards").append(cardDiv);
      });
    }
  });

  // Searched Recipes
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
  });
});
