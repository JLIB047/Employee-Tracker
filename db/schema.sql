DROP DATABASE IF EXISTS employee_db; 
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT(11) PRIMARY KEY,
    title VARCHAR(30)
);

CREATE TABLE positions (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(30),
    salary DECIMAL(9, 2),
    department_id INT
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    positions_id INT,
    manager_id INT NUll
);