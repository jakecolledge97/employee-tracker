CREATE DATABASE company_db;

USE company_db;

-- creates department table
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- creates roles table
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(4,2),
    department_id INT,
    -- uses id from department table
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);


-- creates employee table
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    -- uses id from role table
    FOREIGN KEY (role_id)
    REFERENCES role(id)
);