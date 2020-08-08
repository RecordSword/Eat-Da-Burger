var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, value, cb) {
      var queryString = "INSERT INTO " + table + " SET ?";
      connection.query(queryString, value, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    
    updateOne: function(table, condition, id, cb) {
      var queryString = "UPDATE " + table + " SET " + condition + " WHERE id = ?";
      connection.query(queryString, id, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
  };
  
  module.exports = orm;