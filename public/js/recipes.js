$(function() {
  $(".del").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log(id);
    $.ajax("/api/recipes/" + id, {
      type: "DELETE"
    }).then(location.reload());
  });

  $("#post").on("click", function() {
    event.preventDefault();
    var newRecipe = {
      recipeLink: "https://www.yelp.com/",
      spoonId: 123456,
      title: "Great Food",
      imageLink:
        "https://cakescottage.com/wp-content/uploads/2019/08/melt-chicken-baa.jpg",
      UserId: 1
    };
    $.ajax("/api/recipes", {
      type: "POST",
      data: newRecipe
    }).then(location.reload());
  });
});
