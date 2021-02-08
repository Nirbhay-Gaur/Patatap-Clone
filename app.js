// Variables
var express = require("express"),
    app = express();

// App Config
app.set("view engine", "ejs");
app.use(express.static("assets"));

// Routes

// Index
app.get("/", function(req, res) {
    res.render("index");
});

app.listen(3000, function(){
    console.log("Server has started...");
});