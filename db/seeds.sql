USE employee_db;

INSERT INTO department (title) VALUES ("Human Resources");
INSERT INTO department (title) VALUES ("Engineering");
INSERT INTO department (title) VALUES ("Marketing");
INSERT INTO department (title) Values ("Corporate");

INSERT INTO position (title, salary, department_id) VALUES ("HR Manager", 70, 3);
INSERT INTO position (title, salary, department_id) VALUES ("Data Analyst", 65, 2);
INSERT INTO position (title, salary, department_id) VALUES ("Engineer", 85, 2);
INSERT INTO position (title, salary, department_id) VALUES ("Social Media Manager", 75, 1);
INSERT INTO position (title, salary, department_id) VALUES ("Director", 100, 4);

INSERT INTO employee (first_name, last_name, position_id) VALUES ("Bill", "williams", 1);
INSERT INTO employee (first_name, last_name, position_id) VALUES ("Jessica", "Winters", 3);
INSERT INTO employee (first_name, last_name, position_id) VALUES ("Daniel", "Sharp", 2);
INSERT INTO employee (first_name, last_name, position_id) VALUES ("Emily", "Stein", 4);
INSERT INTO employee (first_name, last_name, position_id) VALUES ("Jimbo", "Fischer", 1);