$(document).ready(function() {
  $(function() {
    let id;
    $.get("/api/user_data").then(function(data) {
      $("#memberName").text(data.email);
      $("#memberId").text(data.id);
      userId = data.id;
      id = data.id;
    });
    $(".del").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      console.log(id);
      $.ajax("/api/recipes/" + id, {
        type: "DELETE"
      }).then(location.reload());
    });

    $(".logout").on("click", function(event) {
      event.preventDefault();
      $.ajax("/logout", {
        type: "GET"
      });
    });

    $(".fav").on("click", function(event) {
      event.preventDefault();
      var recipeId = $(this).data("id");
      var title = $(this).data("title");
      var image = $(this).data("image");
      var userId = id;

      var newRecipe = {
        spoonId: recipeId,
        title: title,
        imageLink: `https://spoonacular.com/recipeImages/${image}`,
        UserId: userId
      };
      $.ajax("/api/recipes", {
        type: "POST",
        data: newRecipe
      }).then(location.reload());
    });

    $(".post").on("click", function(event) {
      event.preventDefault();
      var newRecipe = {
        spoonId: 123456,
        title: "Great Food",
        imageLink:
          "https://cakescottage.com/wp-content/uploads/2019/08/melt-chicken-baa.jpg",
        UserId: userid
      };
      $.ajax("/api/recipes", {
        type: "POST",
        data: newRecipe
      }).then(location.reload());
    });
  });
});
