$(document).ready(function() {
  $("#searchButton").on("click", function() {
    const query = $("#recipeSearch")
      .val()
      .trim();
    const search = { searchTerm: query };

    console.log(query + " " + search);

    $.ajax({
      url: "/api/search",
      method: "POST",
      data: search
    }).then(result => console.log(result));
  });
});
