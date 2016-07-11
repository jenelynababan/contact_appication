//Initializing variables
var mysql      							= require('mysql');
model 									= require('./model');
var UserModel 				     		= function(){ };

UserModel.prototype     			    = model;



//Fetch all Users
UserModel.prototype.listUser = function(data,callback) {
	sql = "SELECT * FROM users where id = ? ";
	this.execute(sql,callback);
};

// insert
UserModel.prototype.register = function(data,callback) {

	sql = "INSERT INTO users(username,password) VALUES (" + mysql.escape(data.username) + "," + 
		    mysql.escape(data.password) + ")";	
	this.execute(sql,callback);

};

UserModel.prototype.authenticate = function(data, callback) {
	var condition = "";
	if(data.password !== null) {
		condition = "AND password = "+ "'" + data.password + "'";
	}
	sql = "SELECT * FROM users where username  = '"+data.username+"' "+condition;
	this.execute(sql, callback);
	};
//exports ContactModel
module.exports = new UserModel();