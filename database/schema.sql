DROP DATABASE IF EXISTS QAcomp;

CREATE DATABASE QAComp;

USE QAComp;

CREATE TABLE IF NOT EXISTS CRST (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nameCRST VARCHAR(50) NOT NULL,
  numberOfStars VARCHAR(255) NOT NULL,
  rate INT NOT NULL,
  customers VARCHAR(50) NOT NULL,
)

CREATE TABLE IF NOT EXISTS HIST (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  stars5 int not null,
  stars4 int not null,
  stars3 int not null,
  stars2 int not null,
  stars1 int not null,
)

CREATE TABLE IF NOT EXISTS ByFeat (
  id int not null AUTO_INCREMENT primary key,
  val1 int not null,
  val2 int not null,
  val3 int not null,
)

INSERT INTO CRST ()