const express = require("express");
const bodyParser = require("body-parser");
const https = require("https")
const request = require("Request");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
   
});


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});