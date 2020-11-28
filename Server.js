// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

// Data
// ===========================================================


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




// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});