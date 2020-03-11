// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  $(function() {
    const query = "tofu";
    $.ajax({
      url: `/api/search/${query}`,
      method: "POST"
    }).then(function(response) {
      console.log(response);
      for (let i = 0; i < response.results.length; i++) {
        xtitle = response.results[i].title;
        const liTag = $("<li>" + xtitle + "</li>");
        const recipeHolder = $("#recipeId");
        recipeHolder.append(liTag);
      }
    });
  });
});
