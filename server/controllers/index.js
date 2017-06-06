var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(null, function(error, data) {
        if (error) {
          throw error;
        } else {
          res.send(data); // response.end/writehead
        }
      });
      // models.users.get(); // like this
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //console.log('req: ', req, 'res: ', res);
      
      models.messages.post(req.body, function(error, data) { //req.body is our data
        if (error) {
          throw error;
        } else {
          res.send('posted!'); // response.end/writehead
        }
      });
 
    } // a function which handles posting a message to the database
  },

  users: {
      // Ditto as above
    get: function (req, res) {
      models.users.get(null, function(error, data) {
        if (error) {
          throw error;
        } else {
          res.send(data); // response.end/writehead
        }
      });
          // models.users.get(); // like this
    },
    post: function (req, res) {
      console.log('REQUEST BODY', req.body);
      models.users.post(req.body, function(error, data) { //req.body is our data
        if (error) {
          throw error;
        } else {
          res.send('posted!'); // response.end/writehead
        }
      });
   
    } 
  }
};

