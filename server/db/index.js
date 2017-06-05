var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat'
});

connection.connect();

module.exports = connection;

// connection.query(`SELECT * FROM solution`, function (err, rows, fields) {
//   if (err) {
//     throw err;
//   } THIS IS NOT NEEDED

//   console.log('The solution is: ', rows[0].solution);
// });

