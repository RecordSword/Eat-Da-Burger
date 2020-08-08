var express = require("express");
// Set Handlebars.
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes and give the server access to them
var routes = require("./controllers/burger_controller");
app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});