// Dependencies
// ===========================================================
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
const {getCustomerBooking} = require("../table");
const exphbs = require("express-handlebars");

let app = express();
let port = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

let customers = [];
let waitlist = [];


//routes.
app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/tables', function(req, res) {
	res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reserve', function(req, res) {
	res.sendFile(path.join(__dirname, 'reservation.html'));
});

app.get('/api/tables', function(req, res) {

	return res.json(customers);
});

app.get('/api/waitlist', function(req, res) {

	return res.json(waitlist);
});

//====== Post for user request (reservation)

app.get("/api/tables",(req, res) => {
	getCustomerBooking().then(function(dbData){
	  console.log("dbData 1 =", dbData);
	  res.json(dbData);
	})
	.catch(function(err){
	  console.log("Error please try again", err);
	})});
	

app.post('/api/new', function(req, res) {
	console.log('Works');
	let newCustomer = req.body;
	if (customers.length >= 5) {
		waitlist.push(newCustomer);
	} else {
		customers.push(newCustomer);
	}
	res.json(newCustomer);
});

// Listener
// ===========================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
