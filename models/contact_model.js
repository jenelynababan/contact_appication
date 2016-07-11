//Initializing variables
var mysql      							= require('mysql');
var model 								= require('./model');
var ContactModel 						= function(){ };
// ContactModel.prototype.constructor  	= ContactModel;
ContactModel.prototype     			    = model;



//Fetch all contacts
ContactModel.prototype.listContact = function(data,callback) {
	sql = "SELECT * FROM con";
	this.execute(sql,callback);
};

//Insert a new contact
ContactModel.prototype.addContact = function(data,callback) {
	sql = "INSERT INTO con (con_id,con_name,con_num) VALUES (''," + mysql.escape(data.con_name) + "," + 
		    mysql.escape(data.con_num) + ")";	
	this.execute(sql,callback);

};

//Fetch a particular contact
ContactModel.prototype.getSingleContact = function(data,callback) {
	sql = "SELECT * FROM con WHERE con_id = " + mysql.escape(data.con_id);
	this.execute(sql,callback);
};

//Delete a particular contact
ContactModel.prototype.deleteContact = function(data,callback) {
	sql = "DELETE FROM con WHERE con_id = " + mysql.escape(data.con_id);
	this.execute(sql,callback);
};

//Update a particular contact details
ContactModel.prototype.editContact = function(data,callback) {
	sql = "UPDATE  con SET con_name = " + mysql.escape(data.con_name) + ",con_num=" + mysql.escape(data.con_num)
	      + "WHERE con_id=" + mysql.escape(data.con_id);	
	this.execute(sql,callback);

};
//exports ContactModel
module.exports = new ContactModel();