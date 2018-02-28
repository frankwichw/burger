var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/index", function(req, res) {
    burger.selectAll(function(data) {
      var burgerData = {
        burgers: data
      };
      res.render("index", burgerData);
    });
});

router.post("/api/burger", function(req, res) {
  burger.insertOne(req.body.burger_name, req.body.devoured, function(result) {
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