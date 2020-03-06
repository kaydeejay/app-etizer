$(`"#${this.id}"`).on("click", function(event) {
  event.preventDefault();
  alert("clicked");
  var id = `${this.id}`;
  $.ajax("/api/recipes/:" + id , {
    type: "DELETE"
  }).then(location.reload());
});

$("#post").on("click", function(event) {
  event.preventDefault();
  $.ajax("/api/recipes", {
    type: "POST"
  }).then(location.reload());
});
