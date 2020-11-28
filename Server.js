// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;



// Data
// ===========================================================
var topFive = [{
  name: 'sandy',
  email: 'test@gmail.com',
  phone: 11111111111,
}, {
  name: 'mark',
  email: 'test1@gmail.com',
  phone: 11111111111,
}, {
  name: 'shivey',
  email: 'test3@gmail.com',
  phone: 11111111111,
}, {
  name: 'john',
  email: 'test4@gmail.com',
  phone: 11111111111,
}, {
  name: 'rekha',
  email: 'test5@gmail.com',
  phone: 11111111111,
}];


app.get("/:customers", (req, res) => {
  var chosen = req.params.customers;
  // What does this log?
  console.log(chosen);
  res.end();
});





// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


