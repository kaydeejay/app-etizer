$(document).ready(function() {
  $(function() {
    $.get("/api/user_data").then(function(data) {
      $("#memberName").text(data.email);
      $("#memberId").text(data.id);
      userid = data.id;
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

    $(".post").on("click", function(event) {
      event.preventDefault();
      var newRecipe = {
        recipeLink: "https://www.yelp.com/",
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
