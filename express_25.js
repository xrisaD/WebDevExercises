//exercise for lesson 25 "Udemy: The Web Developer Bootcamp"
var express = require('express');
var app = express();

app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
	var animal = req.params.animal;
	var sound = null;
	if(animal=='pig'){
		sound = 'Oink';
	}else if(animal=='cow'){
		sound = 'Moo';
	}else if(animal=='dog'){
		sound = 'Woof Woof!';
	}else{
		res.send("Sorry, page not found...");
		return;
	}
	res.send("The " + animal + " says \'"+sound+"\'")
});
app.get("/repeat/:say/:times", function(req, res){
	var say = req.params.say;
	var times = parseInt(req.params.times);
	if(!Number.isInteger(times)){
		res.send("Sorry, page not found...");
		return;
	}
	var result = "";
	for(var i = 0; i<times;i++ ){
		result += say+" ";
	}
	res.send(result);
});
app.get("*", function(req, res){
	res.send("Sorry, page not found...");
});
app.listen(80, function(){
	console.log("Serving dog demo on port 80");
});