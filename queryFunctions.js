const db = require('./connection')
class DB {
    constructor(db){
        this.db = db
    }
allDepts() {
    db.query('SELECT * FROM department', function (err, results) {
        console.log(results);
        if (err) {
            console.log(err);
        } else {
            console.log("success")
        }
        // startApp();
    });
}
allRoles() {
    db.query('SELECT * FROM roles', function (err, results) {
        console.log(results);
        if (err) {
            console.log(err);
        } else {
            console.log("success")
        }
    });
}

allEmployees() {
    db.allEmployees('SELECT * FROM employees', function (err, results) {
        console.log(results);
        if (err) {
            console.log(err);
        } else {
            console.log("success")
        }
    });
}

addDepartment(department_name) {
    return this.db.promise().query(`INSERT INTO department (department_name) VALUES ('${department_name};')` 
    );
}

addRole(title, salary, id) {
    db.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${title}', '${salary}', '${id}' ;')`
    );
}

addEmployee(first_name, last_name, role_id, manager_id) {
    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first_name}', '${last_name}', '${role_id}', '${manager_id}' ;')`
    );
}

updateEmployeeRole(role_id) {
    db.query(`UPDATE employee (role_id) VALUES ('${role_id}')`
    );

}

updateEmployeeManager(manager_id) {
    db.query(`UPDATE employee (manager_id) VALUES ('${manager_id}')`
    );

}
};
module.exports = new DB(db);