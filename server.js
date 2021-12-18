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
        } else if (answer.action === "View all roles") {
            viewRoles();
        } else if (answer.action === "View all employees") {
            viewemployees();
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