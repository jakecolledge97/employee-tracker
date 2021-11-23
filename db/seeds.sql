-- selects database
USE company_db;

-- adds data to tables
INSERT INTO department (id, name)
VALUES (1, "Salon"),
       (2, "Retail");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'Hair Stylist', 23.67, 1),
       (2, 'Shelf Stocker', 29.32, 2);

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (1, 'Jake', 'Colledge', 1),
       (2, 'Eva', 'Pelotta', 2);