CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  message VARCHAR(140),
  username VARCHAR(20),
  roomName VARCHAR(10),
  createdAt DATE
  /* Describe your table here.*/
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

