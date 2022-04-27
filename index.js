const mysql = require('mysql2');
const inquirer = require('inquirer');
require('dotenv').config();
const queryFunctions = require('./queryFunctions');
const db = require('./queryFunctions')

const opt = ["view all departments", "view all roles", "view all employees", "add department", "add role", "add employee"];
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
                    allDepts();
                    break;
                case opt[1]:
                    allRoles();
                    break;
                case opt[2]:
                    allEmployees();
                    break;
                case opt[3]:
                    createDepartment()
                case opt[4]:
                    createRole()
                case opt[5]:
                    createEmployee()
                case opt[6]:
                    updateRole()
                case opt[7]:
                    updateManager()


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
        db.addDepartment(ans)
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
        db.createRole(ans)
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
        db.updateEmployeeRole(ans)
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
        db.updateEmployeeManager(ans)
            .then(() => console.log("successfully updated"))
            .then(() => startApp())
    })
};




startApp();




