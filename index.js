const mysql = require('mysql2');
const inquirer = require('inquirer');
require('dotenv').config();
const queryFunctions = require('./queryFunctions');
const { allDepts, allRoles, allEmployees, addDepartment, addRole, addEmployee,  } = require('./queryFunctions')

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
                    queryFunctions.allDepts();
                    allDepts();
                    break;

                default:
                    break;
            }
        })
        .then((ans) => {
            console.log(ans);
            switch (ans.userview) {
                case opt[1]:
                    queryFunctions.allRoles();
                    allRoles();
                    break;

                default:
                    break;
            }
        })
        .then((ans) => {
            console.log(ans);
            switch (ans.userview) {
                case opt[2]:
                    queryFunctions.allEmployees();
                    allEmployees();
                    break;

                default:
                    break;
            }
        })

}
addDepartment()
inquirer.prompt([
    {
        type: "input",
        name:"add department",
        massage: "What department would you like to add?"
        
    }

])

startApp();




