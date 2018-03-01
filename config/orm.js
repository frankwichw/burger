// requiring connection.js to connect with mysql database
var connection = require("./connection.js");
// orm object
var orm = {
  //select all function template that gets all data from table 
    selectAll: function(callback) {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) throw err;

        callback(result);

      });
    },
  // insert function template to insert burger into table
    insertOne: function(burgerName, callback) {
      var queryString = "INSERT INTO burgers SET ?";
      connection.query(queryString, [
        {
          burger_name: burgerName
        }
      ], 
      function(err, result) {
        if (err) {
          throw err;
        }

        callback(result);
      });
    },
  // update function template to update devoured to true
    updateOne: function(burger_id, callback) {
      var queryString = "UPDATE burgers SET ? WHERE ?";
  
      connection.query(queryString, [
        {
        devoured: true
        },
        {
        id: burger_id
        }
      ], 
      function(err, result) {
        if (err) throw err;

        callback(result);
      }
      );
    }
  };
  // export orm
  module.exports = orm;