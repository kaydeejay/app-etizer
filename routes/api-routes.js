/* eslint-disable */
var db = require("../models");
var passport = require("../config/passport");
const axios = require("axios");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.session.destroy((err) => {
      if (err) return next(err)
      req.logout()
      res.sendStatus(200)
    })
    res.redirect("/api/login");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.get("/api/users/:UserId/recipes", function (req, res) {
    db.Recipe.findAll({
      raw: true,
      where: {
        UserId: req.params.UserId
      }
    }).then(function (dbRecipes) {
      console.log(dbRecipes);
      res.render("recipes", { recipes: dbRecipes });
    });
  });

  app.delete("/api/recipes/:id", function (req, res) {
    db.Recipe.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbRecipes) {
      console.log(dbRecipes);
      res.render("recipes", { recipes: dbRecipes });
    });
  });

  app.post("/api/recipes", function (req, res) {
    console.log(req);
    db.Recipe.create({
      spoonId: req.body.spoonId,
      title: req.body.title,
      imageLink: req.body.imageLink,
      UserId: req.body.UserId
    }).then(function (dbRecipes) {
      console.log("Hello ", dbRecipes);
      res.render("recipes", { recipes: dbRecipes });
    });
  });

  app.get("/api/favorites", function (req, res) {
    console.log(req);
    res.render("favorites", { recipes: dbRecipes });
  });

  app.post("/api/search/:search", function (req, res) {
    let search = req.params.search;
    let apiKey = process.env.SPOON_APIKEY;
    let queryUrl = `https://api.spoonacular.com/recipes/search?query=${search}&apiKey=${apiKey}`;
    axios.get(queryUrl).then(response => {
      res.json(response.data);
      console.log("api-route:", response.data);
    })
      .catch(error => console.log(error))
  });

  // app.post("/api/search", function(req, res) {
  //   let searchTerm = req.body.searchTerm;
  //   let apiKey = process.env.SPOON_APIKEY;
  //   let queryUrl = `https://api.spoonacular.com/recipes/search?query=${searchTerm}&apiKey=${apiKey}`;
    
  //   axios.get(queryUrl).then((results) => {
  //     // console.log(results.data.results);
  //     res.render("search-results", { recipes: results.data.results });
  //   });
  // });

  app.get("/api/search/:term", function(req, res) {
    let searchTerm = req.params.term;
    let apiKey = process.env.SPOON_APIKEY;
    let queryUrl = `https://api.spoonacular.com/recipes/search?query=${searchTerm}&apiKey=${apiKey}`;
    
    axios.get(queryUrl).then((results) => {
      // console.log(results.data.results);
      res.render("search-results", { recipes: results.data.results });
    });
  });
  
  app.get("/api/suggestedSearch/:search", function(req, res) {
    let searchTerm = req.params.search;
    let apiKey = process.env.SPOON_APIKEY;
    let queryUrl = `https://api.spoonacular.com/recipes/search?query=${searchTerm}&apiKey=${apiKey}`;

    axios.get(queryUrl).then((results) => {
      res.render("search-results", { recipes: results.data.results });
    });

  });
};