var connection = require("./connection.js");

var orm = {
    selectAll: function() {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(burgerName) {
      var queryString = "INSERT INTO burgers SET ?";
      console.log(queryString);
      connection.query(queryString, 
        {
          burger_name: burgerName
        }, 
        function(err, result) {
        if (err) throw err;
        console.log(result);
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
      }
      );
    }
  };
  
  module.exports = orm;