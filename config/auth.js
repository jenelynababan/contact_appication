var model   	  = require('../models/user_model');
var passport      = require('passport'),
	LocalStrategy = require('passport-local').Strategy;
var connection	  = require('./db');


// login
passport.use('login', new LocalStrategy(
	// get values from form
	function(username, password, done) {
		var data = { username : username ,
					 password : password };
		// check if username exist			 
		model.authenticate(data, function(err, rows){
			var exist = rows.length > 0 ? true : false; 
			if(exist) {
				var user = rows[0]; //gets 1 username
				return done(null, user);
				console.log('Username found!');
			} 
			return done(null, false);
		});

	}
));

//register
passport.use('register', new LocalStrategy(
	// get values from form
	function(username, password, done) {
		var data = { username : username ,
					 password : null };
		// check if username already exist			 
		model.authenticate(data, function(err, rows){
			var exist = rows.length > 0 ? true : false;
			if(exist) {
            	return done(null, false);
			} else{
				// insert to table
				var user = {};
				user.username = username;
				user.password = password;
				model.register(user, function(err, rows) {
					done(null, true);
				});
			}

		});
	}
));


passport.serializeUser(function(user, done) {
	done(null, user);
	// console.log(user);
});

passport.deserializeUser(function(username, done) {
	// console.log("serializeUserD");
	done(null, {username: username});
});

module.exports = passport;


