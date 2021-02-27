// =============================\ Connection /=========================== \\
// MySQL npm to be able to connect the database with our project
const mysql = require('mysql2')
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
  });
}

module.exports = mysql.createConnection(defaultConfig).promise()

