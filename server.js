var express = require('express');
var app=express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist',function (req,res){
    console.log("I recieved a GET request")
        person1 = {
        name:'Ashwani',
        email:'ashwani2797@gmail.com',
        number: '9988552289'
    };
    person2 = {
        name:'Ayushi',
        email:'ayushi707@gmail.com',
        number: '9988552089'
    };
    person3 = {
        name:'Sonal',
        email:'sonal@gmail.com',
        number: '9438793423'
    };
var contactlist = [person1,person2,person3];
// res.setHeader('Content-Type', 'application/json');
  //  res.send(JSON.stringify(contactlist));
res.json(contactlist);  
});

app.listen(8085);
console.log("running on port 8085");
