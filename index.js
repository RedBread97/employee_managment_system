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
                   viewDepts();
                    break;
                case opt[1]:
                    viewRoles();
                    break;
                case opt[2]:
                    viewEmployees();
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
                    console.log("working")
                    quit();
            }
        })

}
const viewDepts = () => {
queries.allDepts();
startApp()
};

const viewRoles = () => {
    queries.allRoles();
    startApp()
    };

    const viewEmployees = () => {
        queries.allEmployees();
        startApp()
        };

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

        },
        {
            type: "number",
            name: "salary",
            message: "What will the salary of the new role be?"
        },
        {
            type: "number",
            name: "dept",
            message: "What department will this role be assigned to by id#?"
        }

    ]).then(ans => {
        console.log(ans)
        queries.addRole(ans.add_role, ans.salary, ans.dept)
            .then(() => console.log("successfully added"))
            .then(() => startApp())
    })
};

const createEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first',
            message: 'What is the first name of the new employee?'
        },
        {
            type: 'input',
            name: 'last',
            message: 'What is the last name of the new employee?'
        },
        {
            type: 'number',
            name: 'role_id',
            message: 'What is the role id# of the new employee?'
        },
        {
            type: 'input',
            name: 'manager_id',
            message: "What is the id# of the employee's manager?"
        }

    ]).then(ans => {
        console.log(ans)
        queries.addEmployee(ans.first, ans.last, ans.role_id, ans.manager_id)
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
function quit() {
    console.log("goodbye")
    process.exit()
}



startApp();
