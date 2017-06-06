DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

-- CREATE TABLE users (
--   id INTEGER NOT NULL AUTO_INCREMENT,
--   username VARCHAR(30),
--   PRIMARY KEY(id)
-- );

-- -- INSERT INTO users (username) VALUES ('Jeremy');

-- CREATE TABLE messages (
--   id INTEGER NOT NULL AUTO_INCREMENT,
--   username VARCHAR(30),
--   message VARCHAR(140), 
--   roomname VARCHAR(30),
--   PRIMARY KEY(id)
--   -- user_ID INTEGER,
--   -- FOREIGN KEY (username) REFERENCES users(username)
-- );


CREATE TABLE messages (

  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  message varchar(200)  NOT NULL,
  roomname varchar(20),
  PRIMARY KEY (ID)
);



CREATE TABLE users (
  id        int    NOT NULL AUTO_INCREMENT,
  username  varchar(40)   NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

