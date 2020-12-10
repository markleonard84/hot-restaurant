let sql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "Customers",
  
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});});
