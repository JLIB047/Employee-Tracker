const mysql = require('mysql2');
const inquirer = require('inquirer');
const { Table } = require('console-table-printer');

require('dotenv').config()

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect(function(err) {
    if (err) throw err;
    start()
});

function start () {
    inquirer.prompt([
    {
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View all departments",
            "View all positions",
            "View all employees",
            "Add a department",
            "Add a position",
            "Add an employee",
            "Update employee position",
            "Exit"
        ]
    }

]).then(function(answer){
       switch (answer.action){
            //View all Departments 
            case "View all departments":
                viewDept();
            break;

            //View all Positions 
            case "View all positions":
                viewPositions();
            break;

            //View all Employees 
            case "View all Employees":
                viewEmployees();
            break;

            //Add Department 
            case "Add department":
                addDept();
            break;

            //Add Position 
            case "Add Position":
                addPosition();
            break;

            //Add Employee
            case "Add Employee":
                addEmployee();
            break;

            //Update Position
            case "Update Position":
                updatePosition();
            break;

            //Exit 
            case "Exit":
                connection.end();
            break;
       }

    })
};

function viewDept() {
    connection.query("SELECT department.id AS ID, department.title AS Department FROM department",
    function(err, res){
        if (err) throw err
        console.table(res);
        start();
    })
};

function viewPositions() {
    connection.query("SELECT positions.id AS ID, positions.title AS Title FROM positions",
    function(err, res){
        if(err) throw err
        console.log("")
        console.table(res);
        start();
    })
};

function viewEmployees() {
    connection.query("SELECT employee.first_name, employee.last_name, positions.title, positions.salary, department.title AS department, employee.manager_id" +
    "FROM emplopyee" +
    "JOIN positions ON positions.id = employee.positions_id" +
    "JOIN department ON positions.department_id = department.id"+ 
    "ORDER BY employee.id",
    function(err, res) {
        if (err) throw err
        console.log("");
        console.log("Employee List");
        console.log("");
        console.table(res)
        start()
    })
    
};

function addDept() {
    inquirer.prompt([
        {
            name: "name",
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
            name: answers.name,
            id: answers.id
        },
        function(err, res) {
            if(err) throw(err)
            console.Table(res);
            start();
        }

    )
})

}

function addPosition () {

}

function addEmployee () {

}

function updatePosition () {

}

