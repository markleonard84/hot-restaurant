// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;



// Data
// ===========================================================


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


