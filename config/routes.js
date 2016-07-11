module.exports = function(app) {

	var contactcontroller = require('../controllers/contact');
	// jen was here
	var usercontroller    = require('../controllers/user');
	
	//Routes for Contacts
	app.get('/', contactcontroller.listContact); 
	app.get('/new', contactcontroller.viewAddContact); 
	app.post('/add', contactcontroller.addContact);
	app.get('/edit/:id', contactcontroller.viewEditContact);
	app.get('/delete/:id', contactcontroller.deleteContact);
	app.post('/edit_save', contactcontroller.editContact);

	// jen was here
	// working on passport
	app.get('/login_view', usercontroller.viewLogin);
	app.get('/registration_view', usercontroller.viewRegistration);
	app.get('/failed', usercontroller.failed);
	app.get('/login', usercontroller.login);
	app.post('/register', passport.authenticate('register', {
		failureRedirect: '/failed',
		successRedirect: '/login_view'
	}));
	app.post('/login', passport.authenticate('login', {
		failureRedirect: '/failed',
		successRedirect: '/login'
	}));
	app.get('/logout', usercontroller.logout);

	//Rest Api's
	app.get('/api/listContact', contactcontroller.apiListContact);

	//Routes for not initialize
	app.get('*',contactcontroller.viewPageNotFound);
}
		