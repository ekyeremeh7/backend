const mysql = require("mysql");

const mysqlConnection = mysql.createPool({
  host: "https://tekcareapp.herokuapp.com",
  user: "root",
  password: "",
  database: "tekcare",
  multipleStatements: true,
});

mysqlConnection.on("connection", function (connection) {
  console.log("... connected");
});

mysqlConnection.on("acquire", function (connection) {
  console.log("Connection %d acquired", connection.threadId);
});

module.exports = mysqlConnection;
