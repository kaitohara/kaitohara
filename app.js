var express = require('express');
var app = express();
var path = require('path');
var sass = require('node-sass-middleware');

var port = process.env.port || 3000;

app.use(
	sass({
		src: __dirname + '/assets',
		dest: __dirname + '/public',
		debug: true
	})
);


// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next){
	var index = path.join(__dirname, 'index.html');
	res.sendFile(index);
})


app.listen(port, function(){
	console.log("The server is listening on port ", port)
})
