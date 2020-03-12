//lesson27 Udemy:The Web Developer Bootcamp
//use OMDb API

//npm install
//npm install --save express ejs request

var express = require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("search");
});

app.get("/result", function(req,res){
	var query = req.query.search;
	request("http://omdbapi.com/?apikey=e9dcef3c&s="+query , function (error,response,body) {
		
	  if(!error && response.statusCode==200){
		  var data = JSON.parse(body);
		  res.render("result",{data: data});
	  }
	});
});

app.listen(100, function(){
	console.log("Serving on port 100");
});