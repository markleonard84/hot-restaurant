// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();

var PORT = 3000;

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

//var customers = [];

// Data
// ===========================================================
var customers = [{
  name: 'sandy',
  email: 'test@gmail.com',
  phone: 11111111111,
  id: 1,
}, {
  name: 'mark',
  email: 'test1@gmail.com',
  phone: 11111111111,
}, {
  name: 'shivey',
  email: 'test3@gmail.com',
  phone: 11111111111,
  id: 2,
}, {
  name: 'john',
  email: 'test4@gmail.com',
  phone: 11111111111,
  id: 3,
}, {
  name: 'rekha',
  email: 'test5@gmail.com',
  phone: 11111111111,
  id: 4,
}];


app.get("/:customers", (req, res) => {
    var chosen = req.params.customers;
    // What does this log?
    console.log(chosen);
    res.end();
});





//routes.

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/page/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"))
});

app.get("/page/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"))
});

app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});

app.get("/app.js", function(req, res) {
    res.sendFile(path.join(__dirname, "app.js"))
});


//====== Post for user request (reservation)
app.post("/tables", function(req, res) {
  var newCustomer = req.body;
  console.log(newCustomer);
  customers.push(newCustomer);
  res.json(newCustomer);
});




// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
