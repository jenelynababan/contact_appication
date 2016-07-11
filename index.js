//Initializing variables
var express 		= require('express');
var app         	= express();
var compression     = require('compression');
var http	 		= require('http');
var parser 			= require('body-parser');
// jen was here
var passport        = require('passport');
// var LocalStrategy   = require('passport-local').Strategy;
// var GithubStrategy  = require('passport-github').Strategy;
var cookieParser    = require('cookie-parser');


// db
var db = require('./config/db');

//Uses of app
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use("/views", express.static(__dirname + '/views'));

// passport session
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')()); //npm install cookie-parser
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
// app.use(passport.session());


// compress all requests 
app.use(compression()); 

//Use for the views
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

//passing the app
var routes  = require('./config/routes')(app);


app.use(passport.initialize());
app.use(passport.session());


//Creation of Server
http.createServer(app).listen(8080,function() {	
	console.log("Connected & Listen with port 8080");
});												

