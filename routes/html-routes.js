var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/api/users/" + req.user.id + "/recipes");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/api/users/" + req.user.id + "/recipes");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/recipes", isAuthenticated, function(req, res) {
    console.log(req);
    res.render("index", {});
  });
  app.post("/recipes", isAuthenticated, function(req, res) {
    console.log(req);
    res.render("index", {});
  });
  app.delete("/recipes", isAuthenticated, function(req, res) {
    console.log(req);
    res.render("index", {});
  });
};
