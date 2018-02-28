var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

var burgerData;

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      burgerData = {
        burgers: data
      };
      console.log(burgerData);
    });
    res.render("index", burgerData);
});

router.post("/api/burger", function(req, res) {
  burger.insertOne([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
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