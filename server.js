




//needed
var express = require("express");
var bodyParser = require("sequelize");

// Sets up the Express App
// =============================================================

//needed
var app = express();
var PORT = process.env.PORT || 3308;

// Sets up the Express app to handle data parsing

//neeeded to read the user input box input and stores it as a javascript object accessible through**
//req.body**

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory to be served**
// Needed to serve images, CSS files, JS files**
// Now files can be loaded http://localhost:3000/images/etc.etc**

app.use(express.static("public"));

// Routes
//javascript file and module loader, improves speed and quality of code**
//organizes modules ?**
// =============================================================
require("./routes/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
require("./routes/html-routes.js")(app);

// Starts the server to begin listening**
//creates a listener on the specified port or path**
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});