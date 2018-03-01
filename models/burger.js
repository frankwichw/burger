// require orm js to make model for using functions
var orm = require("../config/orm.js");
// model
var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res){
      cb(res);
    });
  },
  insertOne: function(burgerName, cb) {
    orm.insertOne(burgerName, function(res) {
      cb(res);
    });
  },
  updateOne: function(burger_id, cb) {
    orm.updateOne(burger_id, function(res) {
      cb(res);
    });
  }
};
// export burger
module.exports = burger;