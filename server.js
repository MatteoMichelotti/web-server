var express = require("express");
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log("Private route hit!");
		next();
	},
	logger: function (req, res, next) {
		console.log("Request: " + new Date().toString() + " " + req.method + " " + req.originalUrl);
		next();
	}
}
app.use(middleware.logger);
app.use(express.static(__dirname + "/public"));

app.get("/about", middleware.requireAuthentication, function (req, res) {
	res.send("About us!");
});


app.listen(PORT, function(){
	console.log("Server Started on port " + PORT);
});