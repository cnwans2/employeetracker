CREATE DATABASE employee_db;

USE employe_db;

CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR (30) 
 
);

CREATE TABLE roles (
  id INT  PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  INDEX dep_ind INT NOT NULL
);

CREATE TABLE employees (
  id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT
)