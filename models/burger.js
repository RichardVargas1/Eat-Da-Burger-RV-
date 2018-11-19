//importing the ORM to create the functions that will interact da burgers database
var orm = require("../config/orm.js");

var burger = {
    allDaBurgers: function (cb) {
        orm.allDaBurgers(function (res) {
            cb(res);
        });
    },
    insertDaBurger: function (burger, cb) {
        orm.insertDaBurger(burger, function (res) {
            cb(res);
        });
    },
    updateDaBurger: function (id, cb) {
        orm.updateDaBurger([id], function (res) {
            cb(res);
        });
    }
};

module.exports = burger;
