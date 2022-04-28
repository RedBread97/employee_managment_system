const mysql = require('mysql2');
const inquirer = require('inquirer');
require('dotenv').config();
const queryFunctions = require('./queryFunctions');
const queries = require('./queryFunctions')

const opt = ["view all departments", "view all roles", "view all employees", "add department", "add role", "add employee", "update role"];
function startApp() {
    inquirer.prompt([
        {
            type: "list",
            name: "userview",
            message: "What would you like to do?",
            choices: opt
        }
    ])
        .then((ans) => {
            console.log(ans);
            switch (ans.userview) {
                case opt[0]:
                   queries.allDepts();
                    break;
                case opt[1]:
                    queries.allRoles();
                    break;
                case opt[2]:
                    queries.allEmployees();
                    break;
                case opt[3]:
                    createDepartment();
                    break;
                case opt[4]:
                    createRole();
                    break;
                case opt[5]:
                    createEmployee();
                    break;
                case opt[6]:
                    updateRole();
                    break;
                case opt[7]:
                    updateManager();
                    break;


                default:
                    break;
            }
        })

}


const createDepartment = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "add_department",
            massage: "What department would you like to add?"

        }

    ]).then(ans => {
        console.log(ans)
        queries.addDepartment(ans.add_department)
            .then(() => console.log("successfully added"))
            .then(() => startApp())
    })
};

const createRole = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "add_role",
            massage: "What role would you like to add?"

        }

    ]).then(ans => {
        console.log(ans)
        queries.createRole(ans.add_role)
            .then(() => console.log("successfully added"))
            .then(() => startApp())
    })
};

const createEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "add_employee",
            massage: "What employee would you like to add?"

        }

    ]).then(ans => {
        console.log(ans)
        queries.addEmployee(ans.add_employee)
            .then(() => console.log("successfully added"))
            .then(() => startApp())
    })
};

const updateRole = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "update_role",
            massage: "What role would you like to update?"

        }

    ]).then(ans => {
        console.log(ans)
        queries.updateEmployeeRole(ans)
            .then(() => console.log("successfully updated"))
            .then(() => startApp())
    })
};

const updateManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "manager_update",
            massage: "What manager would you like to update?"

        }

    ]).then(ans => {
        console.log(ans)
        queries.updateEmployeeManager(ans)
            .then(() => console.log("successfully updated"))
            .then(() => startApp())
    })
};




startApp();




