const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "us-cdbr-east-03.cleardb.com",
  user: "bb3e722db94689",
  password: "dcae8df9",
  database: "heroku_56950d51009f55e",
  multipleStatements: true,
});

// const mysqlConnection = mysql.createPool({
//   host: "127.0.0.1",
//   user: "root",
//   password: "",
//   database: "tekcare",
//   multipleStatements: true,
// });

mysqlConnection.connect(function(err){
  if(err) throw err;
  console.log("Connected !!!");
  let createUsers = `CREATE TABLE IF NOT EXISTS users(
    id int primary key auto_increment,
    name varchar(250) not null,
    email varchar(250) not null,
    password varchar(250) not null,
    email_verified int default 0,
    verification_code varchar(10)
)`;

mysqlConnection.query(createUsers,function(err,results,fields){
  if(err) throw err;
  console.log("Table Created !!!");
});

mysqlConnection.end(function(err){
  if(err){
    return console.log(err.message);
  }
});

});

// mysqlConnection.on("connection", function (connection) {
//   console.log("... connected");
// });

// mysqlConnection.on("acquire", function (connection) {
//   console.log("Connection %d acquired", connection.threadId);
// });

module.exports = mysqlConnection;




// const mysql = require("mysql");

// const mysqlConnection = mysql.createPool({
//   host: "us-cdbr-east-03.cleardb.com",
//   user: "bb3e722db94689",
//   password: "dcae8df9",
//   database: "heroku_56950d51009f55e",
//   multipleStatements: true,
// });

// mysqlConnection.on("connection", function (connection) {
//   console.log("... connected");
// });

// mysqlConnection.on("acquire", function (connection) {
//   console.log("Connection %d acquired", connection.threadId);
// });

// module.exports = mysqlConnection;
