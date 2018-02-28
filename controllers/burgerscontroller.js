var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var burgerData = {
        burgers: data
      };
      console.log(burgerData);
      res.render("index", burgerData);
    });
});

router.post("/api/burger", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
    ], [
    req.body.name, req.body.sleepy
    ], function(result) {
    // sending id of new burger back
    res.json({id: result.insertId});
  });
});

router.put("/api/burger/:id", function(req, res) {
  var burgerID = req.params.id;
  console.log("id =" + burgerID);

  burger.updateOne(burgerID, function(data){
    console.log(data);
  });
});


module.exports = router;