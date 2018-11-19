var connection = require('../config/connection.js');

var orm = {

    allDaBurgers: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            // callback function
            cb(result);
        });
    },

    insertDaBurger: function (burger, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function (err, result) {
            if (err) {
                throw err;
            }
            // callback function
            cb(result);
        });
    },

    updateDaBurger: function (id, cb) {
        var queryString = "UPDATE burgers SET devoured = true (?)";

        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            // callback function
            cb(result);
        });
    }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
