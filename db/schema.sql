DROP DATABASE IF EXISTS employee_db; 
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NULL,
    PRIMARY KEY (id)
    
);

CREATE TABLE positions (
    id INTEGER NOT NULL AUTO_INCREMENT, 
    title VARCHAR(30) NULL,
    salary DECIMAL(6, 2) NULL,
    department_id INTEGER NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    employee_id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    position_id INTEGER NULL,
    manager_id INTEGER NULL,
    PRIMARY KEY (employee_id)
);