// Import the ORM to create functions that will interact with the database.
const DB = require("../config/orm");

var burger = {
    selectAll: function(cb) {
    DB.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertInto: function(cols, vals, cb) {
    DB.insertInto("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    DB.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  deleteFrom: function(condition, cb) {
    DB.deleteFrom("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
