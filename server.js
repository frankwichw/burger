// dependencies
var express = require("express");
var bodyParser = require("body-parser");
// port
var PORT = process.env.PORT || 3000;
// saving express in app variable
var app = express();
// use static resources from public folder
app.use(express.static("public"));
// use bodyparser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// require handlebars
var exphbs = require("express-handlebars");
// user handlebars to default to main layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// requiring routes
var routes = require("./controllers/burgerscontroller.js");
app.use(routes);
// listening at port
app.listen(PORT);