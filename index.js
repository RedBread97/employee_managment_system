const mysql = require('mysql2');
const inquirer = require('inquirer');
require('dotenv').config();
const queryFunctions = require('./queryFunctions');
const { allDepts, allRoles, allEmployees, addDepartment, addRole, addEmployee, } = require('./queryFunctions')

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


                default:
                    break;
            }
        })



}
const createDepartment=()=> {
    inquirer.prompt([
        {
            type: "input",
            name:"add_department",
            massage: "What department would you like to add?"
    
        }
    
    ]).then(ans=>{
        console.log(ans)
        addDepartment(ans.add_department)
    })

}
// addDepartment()


startApp();




