function User() {
	data 	  = {};
	tomodel   = {};
	model 	  = require('../models/User_model');
    passport  = require('../config/auth');

};
 
User.prototype.constructor = User;

	User.prototype.viewLogin =  function(req, res) {
		data.title = 'Login';
		res.render('../views/html/login.html',data);
	}
	
	User.prototype.viewRegistration =  function(req, res) {
		data.title = 'Registration';
		res.render('../views/html/registration.html', data);
	
	}




// login
	User.prototype.failed =  function(req, res) {
		res.send('incorrect username or password');
	}
	User.prototype.login = function(req, res){
		if (req.session.passport.user === undefined) {
			res.redirect('/login_view');
		} else {
			var name = req.session.passport.user;
			res.render('../views/html/profile.html', {title :'hey', user : name});
		}
	}

// logout
	User.prototype.logout =  function(req, res) {
		console.log('logging out..');
		req.logout();
		res.redirect('/login_view');
	}



//register
	User.prototype.register =  function(req, res) {
		var username = req.body.username;
		var password = req.body.password;
		console.log(username);
	}

module.exports = new User();