module.exports = app => {
  const blogposts = require("../controllers/blogpost.controller.js");

  var router = require("express").Router();

  // Retrieve all blog posts
  router.get("/", blogposts.findAll);

  app.use('/api/blogposts', router);
};