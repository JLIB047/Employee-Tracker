const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

require('dotenv').config()

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306, 
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "employee_db"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
});

function start() {
    inquirer
    .prompt([
    {
        type: "list",
        message: "What would you like to do?",
        name: "action",
        choices: [
            "View all employees",
            "View all departments",
            "View all positions",
            "Add a department",
            "Add a position",
            "Add an employee",
            "Update employee position",
            "Exit"
        ]
    }

]).then(function(answers){
       switch (answers.action){
           
            //View all Employees 
            case "View all employees":
                viewAllEmployees();
            break;

            //View all Departments 
            case "View all departments":
                viewDept();
            break;

            //View all Positions 
            case "View all positions":
                viewPositions();
            break;

            //Add Department 
            case "Add a department":
                addDept();
            break;

            //Add Position 
            case "Add a position":
                addPosition();
            break;

            //Add Employee
            case "Add an employee":
                addEmployee();
            break;

            //Update Position
            case "Update employee position":
                updatePosition();
            break;

            //Exit 
            case "Exit":
                connection.end();
            break;
            default: 
                break;
       }

    })
};

function viewAllEmployees() {
    connection.query('SELECT employee.id AS ID, employee.first_name AS First_Name, employee.last_name AS Last_Name FROM employee',
    function(err, res){
        if (err) throw err
        console.log("All Employees")
        console.table(res)
        start()
    })
    
}

function viewDept() {
    connection.query('SELECT department.id AS ID, department.title AS Department FROM department',
    function(err, res){
        if (err) throw err
        console.log("All Departments")
        console.table(res)
        start()
    })
}

function viewPositions() {
    connection.query('SELECT positions.id AS ID, positions.title AS Title FROM positions',
    function(err, res){
        if(err) throw err
        console.log("All Positions");
        console.table(res)
        start()
    })
}

//position array for employee addition 
let posArr = [];
function selectPosition() {
    connection.query('SELECT * FROM positions', function(err, res){
        if (err) throw err
        for(var i=0; i < res.length; i++){
            posArr.push(res[i].title);
        }
    })
    return posArr;
}

//manager Array 
let managerArr = [];
function selectManager() {
    connection.query('SELECT first_name, last_name FROM employee', function(err, res){
        if (err) throw err
        for (var i = 0; i < res.length; i++) {
            managerArr.push(res[i].first_name);
        }
    })
    return managerArr;
}

//department array 
var deptArr = [];
function selectDepartment() {
    connection.query('SELECT * FROM department', function(err, res){
        if (err) throw err
        for(var i = 0; i < res.length; i++) {
            deptArr.push(res[i].title);
        }
    })
    return deptArr;
}


function addDept() {
    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "What department would you like to add?"
        },
        {
            name: "id",
            type: "input",
            message: "What is the new department ID number?"
        }
    ]).then(function(answers){
        connection.query("INSERT INTO department SET ? ",
        {
            title: answers.title,
            id: answers.id
        },
        function(err, res) {
            if(err) throw err
            console.table(res);
            start();
        }

    )
})

}

function addPosition () {
    connection.query('SELECT positions.title AS Title, positions.salary AS Salary FROM positions LEFT JOIN department.title AS Department FROM department;', function(err, res){
        inquirer.prompt([
            {
                name: 'title',
                type: 'input',
                message: 'What is the name of this new position?'
            },
            {
                name: 'salary',
                type: 'input',
                message: 'What is the salary of the new positon?'
            },
            {
                name: 'department',
                type: 'rawlist',
                message: 'What department does the new position belong to?',
                choices: selectDepartment()
            }
        ]).then(function(answers){
            var deptId = selectDepartment().indexOf(answers.choice) + 1
            connection.query(
                'INSERT INTO positions SET ?',
                {
                    title: answers.title,
                    salary: answers.salary,
                    department_id: deptId
                },
                function(err) {
                    if(err) throw err
                    console.table(answers);
                    start();
                }

            )
        })
    })
}

function addEmployee () {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: "What is the employee's first name?"
        },
        {
            name: 'last_name',
            type: 'input',
            message: "What is the employee's last name?"
        },
        {
            name: 'positions',
            type: 'list',
            message: "What is the employee's position?",
            choices: selectPosition()
        },
        {
            name: 'choice',
            type: 'rawlist',
            message: 'Who is managing the new employee?',
            choices: selectManager()
        }

    ]).then(function (answers){
        var positionsId = selectPosition().indexOf(answers.positions) + 1
        var managerId = selectManager().indexOf(answers.choice) + 1
        connection.query('INSERT INTO employee SET ?',
        {
            first_name: answers.first_name,
            last_name: answers.last_name,
            manager_id: managerId,
            positions_id: positionsId
        },
        function(err){
            if (err) throw err
            console.table(answers)
            start()
        })
    })
}

function updatePosition () {
    connection.query('SELECT employee.last_name, positions.title FROM employee JOIN positions ON employee.positions_id = positions.id',
    (err, res) => {
        if (err) throw err;

        inquirer.prompt([
            {
                name: "last_name",
                type: "rawlist",
                choices: function() {
                    var last_name = [];
                    for(var i = 0; i < res.length; i++) {
                        last_name.push(res[i].last_name);
                    }
                    return last_name;
                },
                message: "What is the employee's last name?",
            },
            {
                name: "positions",
                type: "rawlist",
                message: "What is the employee's new title?",
                choices: selectPosition()
            },
        ]).then(function (answers) {
            var positions_id = selectPostiton().indexOf(answers.positions) + 1;
            connection.query("UPDATE employee SET WHERE ?",
            {
                last_name: answers.last_name,
                positions_id: positions_id
            },
            function (err){
                if (err) throw err;
                console.table(answers);
                start()
            });
        });
    });
}

