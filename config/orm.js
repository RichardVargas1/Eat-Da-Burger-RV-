var connection = require("../config/connection.js");

// Helper function for SQL syntax
// Helps with passing 3 values into the mySQL query
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to pair mySQL syntax
function objToSql(ob) {
  var arr = [];

  // Pushing the values as a string integer array
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // if the value of (object), push key value
      arr.push(key + "=" + value);
    }
  }

  // returns the array of strings
  return arr.toString();
}

// "Object-Relational Mapping" object
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      // callback function
      cb(result);
    });
  },
  // "create a burger to eat"
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    // printed question marks help format values/properties
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      // callback function
      cb(result);
    });
  },
  // "Updating the burger menu"
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      // callback function
      cb(result);
    });
  },
  // "deleting the burger"
  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      // callback function
      cb(result);
    });
  }
};

// Exporting connection for the ORM to utilize
module.exports = orm;
