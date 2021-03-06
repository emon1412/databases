var db = require('../db');
// db.method_here

module.exports = {
  messages: {
    get: function (options, callback) {
      db.query('SELECT * FROM messages', function(error, results) {
        console.log('results get ', results);
        if (error) {
          callback(error);
          return;
        }
        callback(null, results);
      });
      //arguments are our design
    }, // a function which produces all the messages
    post: function (data, callback) {

      var queryString = `INSERT INTO messages (message, username, roomname) VALUES (?, ?, ?)`;
      var queryArgs = [data.message, data.username, data.roomname];
      db.query(queryString, queryArgs, function(error, results) {
        console.log('results post ', results);
        if (error) {
          callback(error);
          return;
        }
        callback(null, results);
      });

      // db.query(code to add to database)
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (options, callback) {
      db.query('SELECT username FROM users ', function(error, results) {
        console.log('results get ', results);
        if (error) {
          callback(error);
          return;
        }
        callback(null, results);
      });
    },
    post: function (data, callback) {
      var queryArgs = [data.username];
      console.log('data is', data); //
      db.query(`INSERT INTO users (username) VALUES (?)`, queryArgs, function(error, results) {
        console.log('results get ', results);
        if (error) {
          callback(error);
          return;
        }
        callback(null, results);
      });
    }
  }
};

