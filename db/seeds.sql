INSERT INTO department (department_name)
VALUES
  ('Executive'), 
  ('management'),
  ('Sales'),
  ('IT'),
  ('HR');

  INSERT INTO roles (title, salary, department_id)
VALUES 
('CEO', 200000.00, 1),
('General Manager', 175000.00, 2),
('Assistant General Manager', 125000.00, 2),
('Sales Manager', 100000.00, 2),
('IT Manager', 100000.00, 2),
('HR Manager', 100000.00, 2),
('Sales Department Lead', 90000.00, 3),
('Sales Associate', 50000.00, 3),
('IT Technician', 70000.00, 4),
('HR coordinator', 50000.00, 5);

INSERT INTO
  employee (first_name, last_name, role_id, manager_id)
VALUES
('Ned', 'Stark', 1, NULL),
('Rob', 'Stark', 2, 1),
('Arya', 'Stark', 3, 2),
('John', 'Snow', 4, 3),
('Bran', 'Stark', 5, 3),
('Sansa', 'Stark', 6, 3),
('Bill', 'Bob', 7, 4),
('Tom', 'Holland', 8, 4),
('Kevin', 'James', 8, 4),
('Miles', 'Turner', 9, 5),
('William', 'Hogan', 9, 5),
('Claire'), 'Smith', 10, 6),
('Mathew', 'Carter', 10, 6);

SELECT





