const mysql = require('mysql2');
const inquirer = require('inquirer');
require('dotenv').config();

const opt = ["ALL_DEPT", "ALL_ROLES"];
function startApp() {
    inquirer.prompt([
        {
            type: "list",
            name: "userview",
            message: "What you want to see?",
            choices: opt
        }
    ])};