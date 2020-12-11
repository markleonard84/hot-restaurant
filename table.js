let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "hot_restaurant"})
  
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  console.table([customers]);
});

getCustomerBooking = () => {
  return new Promise(function(resolve, reject){
    connection.query(
      `SELECT * FROM customers`, 
        function(err, rows){                                                
            if(rows === undefined){
                reject(new Error("Error please define the row"));
            }else{
                resolve(rows);
            }
        }
    )}
)}


module.exports = {
  "getCustomerBooking": getCustomerBooking,
  "connection":connection
}