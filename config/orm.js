var connection = require("./connection.js");

var orm = {
    selectAll: function(cb) {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      });
    },
    insertOne: function(burgerName, devoured) {
      var queryString = "INSERT INTO burgers SET ?";
      console.log(queryString);
      connection.query(queryString, [
        {
          burger_name: burgerName
        },
        {
          devoured: 0
        }
      ], 
        function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      });
    },
    updateOne: function(burger_id) {
      var queryString = "UPDATE burgers SET ? WHERE ?";
  
      connection.query(queryString, [
        {
        devoured: 1
        },
        {
        id: burger_id
        }
      ], 
      function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      }
      );
    }
  };
  
  module.exports = orm;