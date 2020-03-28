var express = require("express");
var app = express();
app.use(express.static("public")); // to serve public directory for express
//app.set("view engine", "ejs");  // extention not needed if this line is active

app.get("/", function (req, res) {
	res.render("home.ejs");
});

app.get("*", function (req, res) {
	res.send("ERROR 404 PAGE NOT FOUND! GOOD BYE!");
});

var server = app.listen(3000, "0.0.0.0", function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("listening at http://%s:%s\n", host, port);
});