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
<<<<<<< HEAD
  app.get("/logout", function(req, res) {
    console.log(req);
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
=======

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    // $;
>>>>>>> 49d01db41b8c73b75967a7098f2e84461149cb04
    res.render("index", {});
  });
};
