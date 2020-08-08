var connection = require("./connection.js");
// Create Helper functions in Queries
function createQmarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function translateSql(obj) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob,key)) {
      if(typeof value === "string" && value.indexOf (" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value)
    }
  }
  return arr.toString();
}

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (tableInput, cols, value, cb) {
    var queryString = "INSERT INTO " + tableInput + " (" + cols.toString() + ") " + "VALUES (" + createQmarks(vals.length) + ") "
    connection.query(queryString, value, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function (tableInput, objColVals, condition, cb) {
    var queryString = "UPDATE " + tableInput + " SET " + translateSql(objColVals) + " WHERE" + condition;
    connection.query(queryString, id, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  deleteOne: function (table, condition, cb) {
    var queryString = "DELETE FROM " + table + " WHERE " + condition;
    console.log(queryString)
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });

  }
};

module.exports = orm;