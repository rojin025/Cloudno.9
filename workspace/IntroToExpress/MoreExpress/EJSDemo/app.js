// var app = require("express")();
var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
})

app.get("/fall/:thing", function(req, res){
    var thing = req.params.thing;
    res.send("You feel in love with " + thing);
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started!");
})