const mysql = require('mysql');
const inquirer = require('inquirer');
const { Table } = require('console-table-printer');

const connection = mysql.createConnection({
    multipleStatements: true,
    host: 'localhost',

    port: 3001, 

    user: 'root',

    password: "$lickCode044",
    database: "employee_db"
});

connection.connect(function(err) {
    if(err) throw(err);
    start();
});

const start = () => {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a position",
            "Add an employee",
            "Update employee position",
            "Exit"
        ]
    })
    .then(function(answer){
        if(answer.action === "View all departments") {
            viewDept();
        } else if (answer.action === "View all positions") {
            viewPositions ();
        } else if (answer.action === "View all employees") {
            viewEmployee();
        } else if (answer.action === "Add a department") {
            addDept();
        } else if (answer.action === "Add a position") {
            addPosition();
        } else if (answer.action === "Add an employee") {
            addEmployee();
        } else if (answer.action === "Update employee position"){
            updatePosition();
        } else if (answer.action === "Exit"){
            connection.end();
        }
    })
}

function viewDept() {
    var query = `SELECT * FROM departments`;
    connection.query(query, function(err, res){
        console.log(`DEAPARTMENTS:`)
        res.forEach(department => {
            console.log(`ID: ${department.id} | NAME: ${department.name}`)
        })
        start();
    });
};

function viewPositions() {
    var query = `SELECT * FROM positions`;
    connection.query(query, function(err, res){
        res.forEach(position => {
            console.log(`ID: ${position.id} | NAME: ${position.title} | SALARY: ${position.salary} | DEPARTMENT_ID: ${department.id}`)
        })
        start();
    })

}

function viewEmployee() {
    var query = `SELECT * FROM employee`;
    connection.query(query, function(err, res){
        res.forEach(employee => {
            console.log(`ID: ${employee.id} | FIRST_NAME: ${employee.first_name} | LAST_NAME: ${employee.last_name} | POSITION_ID: ${employee.position.id} | MANAGER_ID: ${employee.manager_id}`)
        })
        start();
    })
}

function addDept () {

}

function addPosition () {

}

function addEmployee () {

}

function updatePosition () {

}