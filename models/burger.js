// Importing the ORM to create the functions that will interact with da burgers database
var orm = require("../config/orm.js");

var daBurger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            // callback
            cb(res);
        });
    },
    // The variable columns and values are arrays.
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            // callback
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            // callback
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            // callback
            cb(res);
        });
    }
};

// Exporting the database functions for the burgers_controller.js file
module.exports = daBurger;
