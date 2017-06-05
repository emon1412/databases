var db = require('../db');
// db.method_here

module.exports = {
  messages: {
    get: function () {
      //arguments are our design
    }, // a function which produces all the messages
    post: function () {
      // db.query(code to add to database)
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

