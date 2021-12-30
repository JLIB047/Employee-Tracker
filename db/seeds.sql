USE employee_db;

INSERT INTO department (id, title) 
VALUES 
    (1, "Human Resources"),
    (2, "Engineering"),
    (3, "Marketing"),
    (4, "Corporate");

INSERT INTO positions (title, salary, department_id) 
VALUES 
    ("HR Manager", 70000, 1),

    ("Data Analyst", 75000, 2), 
    ("Engineer", 85000, 2),

    ("Social Media Manager", 75000, 3),
    ("Sales Manager", 90000, 3),

    ("Director", 100000, 4),
    ("Asst. Director", 95000, 4);

INSERT INTO employee (first_name, last_name, positions_id, manager_id) 
VALUES 
    ("Bill", "Williams", 1, null),

    ("Jessica", "Winters", 2, null),
    ("Daniel", "Sharp", 3, 2),

    ("Emily", "Stein", 4, null),
    ("Jason", "Ellis", 5, 3),

    ("Jimbo", "Fischer", 6, null),
    ("Tony", "Gambino", 7, 6);