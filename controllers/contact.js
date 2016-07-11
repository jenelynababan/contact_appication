function Contact() {
	data 	= {};
	tomodel = {};
	model 	= require('../models/contact_model');
};
 
Contact.prototype.constructor = Contact;

//Function to list all contacts
Contact.prototype.listContact =  function(req, res) {
	data.title = 'My Contacts';
	model.listContact(tomodel,function(err,rows) {
	// 	//error handling , try catch
		if(err) {
			data.message = 'Bad Request for listContact';
			res.render('../views/html/error.html',data);
		}
		data.rows = rows;		
       	res.render('../views/html/all.html',data);
	});
}
//Function to list all contacts API
Contact.prototype.apiListContact =  function(req, res) {
	data.title = 'My Contacts';
	model.listContact(tomodel,function(err,rows) {
		//error handling , try catch
		if(err) {
			data.message = 'Bad Request for listContact';
			res.render('../views/html/error.html',data);
		}
		data.rows = rows;		
       	res.json(data);
	});
}
//Function to show the add contact form
Contact.prototype.viewAddContact =  function(req, res) {
	data.title = 'Add New Contats';
	res.render('../views/html/new.html',data);
}

//Function to insert a new contact
Contact.prototype.addContact =  function(req, res) {	
	tomodel.con_name = req.body.con_name;
	tomodel.con_num = req.body.con_num;
	model.addContact(tomodel,function(err,rows) {
		//error handling , try catch
		if (err) {
			data.message = 'Bad Request for addContact';
			res.render('../views/html/error.html',data);
		}
	  	res.redirect('/');
	});
}

//Function to edit contact
Contact.prototype.viewEditContact =  function(req, res) {
	data.title = 'Edit Contats';
	tomodel.con_id = req.params.id;
	model.getSingleContact(tomodel,function(err,rows) {
		//error handling , try catch
		if (err) {
			data.message = 'Bad Request for viewEditContact';
			res.render('../views/html/error.html',data);
		}	
		//error handling , try catch (null rows)
		if (rows == 0) {
			data.message = 'Contact not found kindly visit the home page again';
			res.render('../views/html/error.html',data);
		} else {
		  	data.rows = rows;
		  	res.render('../views/html/edit.html',data);
		}
	});
}

//Function to delete contact
Contact.prototype.deleteContact =  function(req, res) {	
	tomodel.con_id = req.params.id;
	model.deleteContact(tomodel,function(err,rows) {
		//error handling , try catch
		if (err) {
			data.message = 'Bad Request for deleteContact';
			res.render('../views/html/error.html',data);
		}
			res.redirect('/');			  		
	});
}

//Function to save the editted contact
Contact.prototype.editContact =  function(req, res) {	
	tomodel.con_name = req.body.con_name;
	tomodel.con_num = req.body.con_num;
	tomodel.con_id = req.body.con_id;
	model.editContact(tomodel,function(err,rows) {
		//error handling , try catch
		if (err) {
			data.message = 'Bad Request for editContact';
			res.render('../views/html/error.html',data);
		}
	  	res.redirect('/');
	});
}
//Function to show if route not existing
Contact.prototype.viewPageNotFound =  function(req, res) {
	data.message = 'Page Not Found';
	res.render('../views/html/pagenotfound.html',data);
}


//exports contact
module.exports = new Contact();