$(function() {
  $("#'" + this.id + "'").click(function(event) {
    event.preventDefault();
    alert("clicked");
    var id = $(this).data("id");
    $.ajax("/api/recipes/:" + id, {
      type: "DELETE"
    }).then(location.reload());
  });
});

$(function() {
  $("#post").click(function() {
    $.ajax("/api/recipes", {
      type: "POST"
    }).then(location.reload());
  });
});
