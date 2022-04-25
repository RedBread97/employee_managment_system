DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_id INT,
    titles VARCHAR(30) NOT NULL,
    salary DECIMAL(8,6),
    FOREIGN KEY (department_id)
    REFERENCES department (id)
    IN DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL
    FOREIGN KEY (roles_id)
    REFERENCES roles(id)
    IN DELETE SET NULL
    manager_id INT NOT NULL
    FOREIGN KEY (employee_id)
    REFERENCES employee(id)
);

