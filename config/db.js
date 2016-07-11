var mysql	= 	require('mysql');
var pool 	=  	mysql.createPool({
    connectionLimit : 1000,
    host     : 'localhost',
    user     : 'Priume',
    password : 'Teampriume18!',
    database : 'contact_book'
});   

// var connection = mysql.createConnection({
// 	connectionLimit : 1000,
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'contact_book'
// });
//establish connection

 pool.getConnection(function(err, connection) {
    if (err) {
     console.error('Error connecting: ' + err.stack);
        connection.release();
     return;
 }
});
 
module.exports = pool;                 
 // console.log('Connection established');
//exports connection 