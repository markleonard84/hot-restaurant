let sql = require("mysql");
let connection = mysql.createConnection({
 
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  console.table([Customers]);
});});

