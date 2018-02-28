var connection = require("./connection.js");

var orm = {
    selectAll: function(callback) {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) throw err;

        callback(result);
      });
    },
    insertOne: function(burgerName, devoured, callback) {
      var queryString = "INSERT INTO burgers SET ?";
      connection.query(queryString, [
        {
          burger_name: burgerName
        },
        {
          devoured: devoured
        }
      ], 
      function(err, result) {
        if (err) {
          throw err;
        }
        console.log(callback);
        callback(result);
      });
    },
    updateOne: function(burger_id, callback) {
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
        callback(result);
      }
      );
    }
  };
  
  module.exports = orm;