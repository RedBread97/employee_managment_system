const db = require('./connection')
class DB {
    constructor() {
        this.db = db
    }
    allDepts() {
        db.query('SELECT * FROM department', function (err, results) {
            console.table(results);
            if (err) {
                console.log(err);
            } else {
                console.log("success")
            }

        }
        );
    }
    allRoles() {
        db.query('SELECT * FROM roles', function (err, results) {
            console.table(results);
            if (err) {
                console.log(err);
            } else {
                console.log("success")
            }
        });
    }

    allEmployees() {
        db.query('SELECT * FROM employee', function (err, results) {
            console.table(results);
            if (err) {
                console.log(err);
            } else {
                console.log("success")
            }
        });
    }

    addDepartment(department_name) {
        return this.db.promise().query(`INSERT INTO department (department_name) VALUES ('${department_name}')`
        );
    }

    addRole(add_role, salary, dept) {
        return this.db.promise().query(`INSERT INTO roles (titles, salary, department_id) VALUES ('${add_role}', '${salary}', '${dept}')`
        );
    }

    addEmployee(first_name, last_name, role_id, manager_id) {
        return this.db.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first_name}', '${last_name}', '${role_id}', '${manager_id}')`
        );
    }

    updateEmployeeRole(role_id) {
        return this.db.promise().query(`UPDATE employee (role_id) VALUES ('${role_id}')`
        );

    }

    updateEmployeeManager(manager_id) {
        return this.db.promise().query(`UPDATE employee (manager_id) VALUES ('${manager_id}')`
        );

    }
};

module.exports = new DB();