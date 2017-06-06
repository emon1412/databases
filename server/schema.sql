CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(30),
  message VARCHAR(140),
  roomname VARCHAR(30),
  PRIMARY KEY(id)
  /* Describe your table here.*/
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

