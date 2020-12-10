INSERT INTO department (name) VALUES ('sales');
INSERT INTO department (name) VALUES ('engineering');
INSERT INTO department (name) VALUES ('legal');
INSERT INTO department (name) VALUES ('finance');

INSERT INTO role (title, salary, department_id) VALUES ('sales lead', '100000', '1');
INSERT INTO role (title, salary, department_id) VALUES ('sales person', '80000', '1');
INSERT INTO role (title, salary, department_id) VALUES ('lead engineer', '150000', '2');
INSERT INTO role (title, salary, department_id) VALUES ('software engineer', '120000', '2');
INSERT INTO role (title, salary, department_id) VALUES ('legal team lead', '250000', '3');
INSERT INTO role (title, salary, department_id) VALUES ('lawyer', '190000', '3');
INSERT INTO role (title, salary, department_id) VALUES ('accountant', '125000', '4');

INSERT INTO employee (first_name, last_name, role_id) VALUES ('Xavier', 'Caro', '1');
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Alan', 'Guiterez', '2', '1');
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jose', 'Sanchez', '2', '1');
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Zues', 'Light', '3');
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Aaron', 'Guiterez', '4', '4');
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Romeo', 'Lopez', '5');
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Nate', 'YU', '6', '6');
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Gabby', 'Lovo', '7');