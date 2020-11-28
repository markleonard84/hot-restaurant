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
// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//




// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


