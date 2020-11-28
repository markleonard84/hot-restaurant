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

var customers = [];
var waitlist = [];

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





//routes.

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"))
});

app.get("/tables", function(req, res) {
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
 // console.log(newCustomer);
  topFive.push(newCustomer);
  res.json(newCustomer);
});




// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
