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

function addDepartment() {
db.query(`INSERT Into department (name) VALUES ('${name};')`, function (err, results){
    console.log(results);
    if (err) {
        console.log(err);
    } else {
        console.log("successfully added")
    }
});
}

module.exports = { allDepts, allRoles}