var express = require('express')
var path = require('path')

var app = express();

var http = require('http')
http = http.Server(app)

//MIDDLEWARE
//external library
app.set('views','path.join(__dirname,'views'))
app.set('view engine','pug')
//set and just use
app.use(express.static(path.join(__dirname, 'public')))


app.get('/',function(req, res){

	var name = "Roxanne"

	// get name from database

	//add first name and last name

	//set it to a variable

	//pass that variable to the template

	// [browser] request  <->  response [server]

	res.render("index.pug", {myname:name})
	
	//res.send("<h1>hello ITP<h1>")

})


app.get('/about, function(req, res'){

	res.render("about.pug")
	//res.send("ABOUT ITP")

}

app.get('/contact, function(req, res'){

	res.send("contact page")

}

var server = http.listen(3000, function({

	console.log("I am listening on port 3000")

})