var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
})


// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!!");
});
// "/dog" => "Meow!"
app.get("/dog", function(req, res){
   res.send("MEOW!");
   console.log("some made a request to DOG!!");
});

// Tell Express to listen for requests (start server)

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("Server has started!!");
});