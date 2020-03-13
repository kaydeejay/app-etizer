$(document).ready(function() {
  $("#searchButton").on("click", function() {
    const query = $("#recipeSearch")
      .val()
      .trim();
    window.location.replace("/api/search/" + query);
  });

  $(".suggestedSearch").on("click", function() {
    let searchTerm = $(this).text();
    window.location.replace(`/api/suggestedSearch/${searchTerm}`);
  });
});
