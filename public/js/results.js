/**
 * In SEARCH.JS
 * CLick listener on the .suggestedSearch class
 * Make an AJAX call to /api/search/:result
 *
 * IN API ROUTES.JS
 * Do what you are currently doing but also...
 * Filter out your axios response to just get the array of recipe object that you want
 * Use Handlebars to render a new file
 * And pass that object created above to it
 */

// eslint-disable-next-line no-unused-vars
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
// });
// });
// });
