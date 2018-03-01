// dependencies
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
//redirect to main page url
router.get("/", function(req, res){
	res.redirect("/index");
});
// use orm function to select all data and render index.handlebars using data
router.get("/index", function(req, res) {
    burger.selectAll(function(data) {
      var burgerData = {
        burgers: data
      };
      res.render("index", burgerData);
    });
});
// use orm function to insert burger into database
router.post("/api/burger", function(req, res) {
  burger.insertOne(req.body.burger_name, function(data) {
    res.json({ok:true});
  });
});
//use orm function to update the devoured column to true
router.put("/api/burger/:id", function(req, res) {
  var burgerID = req.params.id;
  console.log("id =" + burgerID);

  burger.updateOne(burgerID, function(data){
    res.json({ok:true});
  });
});
// export router to be used in server.js
module.exports = router;