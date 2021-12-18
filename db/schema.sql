DROP DATABASE IF EXISTS employee_db; 
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
    
);

CREATE TABLE positions (
    id INTEGER AUTO_INCREMENT, 
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(6, 2) NOT NULL,
    department_id INTEGER NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    position_id INTEGER NULL,
    manager_id INTEGER NULL,
    PRIMARY KEY (id)
);