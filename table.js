require('dotenv').config();
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

  
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
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