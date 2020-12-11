DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    department_name VARCHAR(30) NOT NULL
);
    
CREATE TABLE role (
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (30) NOT NULL,
    salary INT(15) NOT NULL,
    department_id INT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE employee (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
	PRIMARY KEY (id)
);

drop table department;

INSERT INTO department (department_name) VALUES ('sales');
INSERT INTO department (department_name) VALUES ('engineering');
INSERT INTO department (department_name) VALUES ('legal');
INSERT INTO department (department_name) VALUES ('finance');

INSERT INTO role (title, salary, department_id) VALUES ('sales lead', '100000', 1);
INSERT INTO role (title, salary, department_id) VALUES ('sales person', '80000', 1);
INSERT INTO role (title, salary, department_id) VALUES ('lead engineer', '150000', 2);
INSERT INTO role (title, salary, department_id) VALUES ('software engineer', '120000', 2);
INSERT INTO role (title, salary, department_id) VALUES ('legal team lead', '250000', 3);
INSERT INTO role (title, salary, department_id) VALUES ('lawyer', '190000', 3);
INSERT INTO role (title, salary, department_id) VALUES ('accountant', '125000', 4);

INSERT INTO employee (first_name, last_name, role_id) VALUES ('Xavier', 'Caro', 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Alan', 'Guiterez', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jose', 'Sanchez', 2, 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Zues', 'Light', '3');
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Aaron', 'Guiterez', 4, 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Ray', 'spark', '5');
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Nate', 'YU', 6, 6);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Gabby', 'Lovo', 7);
