const mysql = require("mysql");

const mysqlConnection = mysql.createPool({
  host: "us-cdbr-east-03.cleardb.com",
  user: "bb3e722db94689",
  password: "dcae8df9",
  database: "heroku_56950d51009f55e",
  multipleStatements: true,
});

mysqlConnection.on("connection", function (connection) {
  console.log("... connected");
});

mysqlConnection.on("acquire", function (connection) {
  console.log("Connection %d acquired", connection.threadId);
});

module.exports = mysqlConnection;
