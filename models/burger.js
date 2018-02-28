var orm = require("../config/orm.js");

var burger = {
  selectAll: function() {
    orm.selectAll();
  },
  insertOne: function(burgerName) {
    orm.insertOne(burgerName);
  },
  updateOne: function(burger_id) {
    orm.updateOne(burger_id);
  }
};

module.exports = burger;