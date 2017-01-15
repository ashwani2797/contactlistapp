var express = require('express');
var app=express();
app.get('/',function(req,res){
 res.send("hello world from server.js")
});

app.listen(8085);
console.log("running on port 8080");
