




//needed
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var path = require("path");
// var hbs = require("handlebars");

// Sets up the Express App
// =============================================================

//needed
var app = express();
var PORT = process.env.PORT || 3308;
var path = require("path");
var options = { dotfiles: 'ignore', etag: false,
extensions: ['htm', 'html'],
index: false
};
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", "./views");

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
// app.set("view engine", "hbs");
// app.use(express.static("public"));

app.use(express.static(path.join(__dirname, 'public'), options));


// Routes
//javascript file and module loader, improves speed and quality of code**
//organizes modules ?**
// =============================================================
require("./routes/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files

// require("./routes/api-routes.js")(app);

// Starts the server to begin listening**
//creates a listener on the specified port or path**
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});