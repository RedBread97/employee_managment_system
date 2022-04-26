const db = require('../connection')
function allDepts() {
    db.query('SELECT * FROM department', function (err, results) {
        console.log(results);
        if (err) {
            console.log(err);
        } else {
            console.log("successfully added")
        }
        // startApp();
    });
}
function allRoles() {
    db.query('SELECT * FROM roles', function (err, results){
        console.log(results);
        if (err) {
            console.log(err);
        } else {
            console.log("successfully added")
        }
    });
}

function allEmployees() {
    db.allEmployees('SELECT * FROM employees', function (err, results){
        console.log(results);
        if (err) {
            console.log(err);
        } else {
            console.log("successfully added")
        }
    });
}

function addDepartment(department_name) {
db.query(`INSERT INTO department (department_name) VALUES ('${department_name};')`, function (err, results){
    console.log(results);
    if (err) {
        console.log(err);
    } else {
        console.log("successfully added")
    }
});
}

function addRole(title, salary, id) {
    db.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${title}', '${salary}', '${id}' ;')`, function (err, results){
        console.log(results);
        if (err) {
            console.log(err);
        } else {
            console.log("successfully added")
        }
    });
    }

    function addEmployee(first_name, last_name, role_id, manager_id) {
        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first_name}', '${last_name}', '${role_id}', '${manager_id}' ;')`, function (err, results){
            console.log(results);
            if (err) {
                console.log(err);
            } else {
                console.log("successfully added")
            }
        });
        }

        function updateEmployee(){
            db.query()

        }

module.exports = { allDepts, allRoles, allEmployees, addDepartment, addRole, addEmployee };