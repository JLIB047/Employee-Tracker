USE employee_db;

INSERT INTO department (title) 
VALUES 
    ("Human Resources"),
    ("Engineering"),
    ("Marketing"),
    ("Corporate");

INSERT INTO positions (title, salary, department_id) 
VALUES 
    ("HR Manager", 70, 1),
    ("Data Analyst", 65, 2), 
    ("Engineer", 85, 3),
    ("Social Media Manager", 75, 4),
    ("Director", 100, 5);

INSERT INTO employee (first_name, last_name, position_id, manager_id) 
VALUES 
    ("Bill", "Williams", 1, 1),
    ("Jessica", "Winters", 3, 2),
    ("Daniel", "Sharp", 2, 3),
    ("Emily", "Stein", 4, 4),
    ("Jimbo", "Fischer", 1, 5);