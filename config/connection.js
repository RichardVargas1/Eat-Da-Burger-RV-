var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
});

// var connection;

// if (process.env.JAWSDB_URL) {
    // connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
    // connection = mysql.createConnection({
        // host: 'localhost',
        // user: 'root',
        // password: '',
        // database: 'burgers_db'
    // });
// }

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Exporting connection for the ORM to utilize
module.exports = connection;
