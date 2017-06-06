// var models = require('../models');
var db = require ('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      db.Message.findAll({include: [db.User]})
        .then(function(messages) {
          res.json(messages);
        }); 
    }, 
    post: function (req, res) {
      db.User.findOrCreate({where: {username: req.body.username}}).spread(function(user, created) {
        db.Message.create({
          userid: user.get('id'),
          message: req.body.message,
          roomname: req.body.roomname
        }).then(function(message) {
          res.sendStatus(201);
        });
      });
    } 
  },

  users: {
    get: function (req, res) {
      db.User.findAll({include: [db.User]}).then(function(users) {
        res.json(users);
      });
    },
    post: function (req, res) {
      db.User.findOrCreate({where: {username: req.body.username}}).spread(function(user, created) {
        console.log('USER IS: ', user);
        console.log('CREATED IS: ', created);

        res.sendStatus(created ? 201 : 200);
      });
    }
  }
};

