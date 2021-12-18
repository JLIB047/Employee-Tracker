USE employee_db;

INSERT INTO department (title) 
VALUES 
    ("Human Resources"),
    ("Engineering"),
    ("Marketing"),
    ("Corporate");

INSERT INTO position (title, salary, department_id) 
VALUES 
    ("HR Manager", 70, 3),
    ("Data Analyst", 65, 2), 
    ("Engineer", 85, 2),
    ("Social Media Manager", 75, 1),
    ("Director", 100, 4);

INSERT INTO employee (first_name, last_name, position_id) 
VALUES 
    ("Bill", "williams", 1),
    ("Jessica", "Winters", 3),
    ("Daniel", "Sharp", 2),
    ("Emily", "Stein", 4),
    ("Jimbo", "Fischer", 1);