//Import express, mysql2, inquirer, and index
const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();
const inquirer = require('inquirer');
const cTable = require('console.table')

//select port to listen on
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: process.env.DB_USER,
        // MySQL password
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    console.log(`Connected to the company_db database.`)
);

const choices = ["View all departments.", "View all roles.", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
//ask question function
async function init () {
    const answer = await inquirer.prompt([
        //prompt user initial list of things to do
        {
            type: 'list',
            message: "What would you like to do?",
            choices:[choices[0],choices[1],choices[2],choices[3],choices[4],choices[5],choices[6]],
            name: "action"
        }
    ])
    
    //Checks which action to take from prompt choice
    //Shows Department table
    if(answer.action === choices[0]){
        db.query('SELECT * FROM company_db.department;', function (err, results){
            console.table('\n','Departments', results, '\n')
            init();
        });
        
    }
    //Shows Roles table
    if(answer.action === choices[1]){
        db.query(`SELECT id, title, (salary*38)*52 AS 'Salary', department_id AS 'Department Id' FROM company_db.role;`, function (err, results){
            console.table('\n','Roles', results, '\n')
            init();
        });
    }
    //Shows Employees table
    if(answer.action === choices[2]){
        db.query(`SELECT id, first_name AS 'First Name', last_name AS 'Last Name', role_id AS 'Role Id' FROM company_db.employee;`, function (err, results){
            console.table('\n','Employees', results, '\n')
            init();
        });
    }

    if(answer.action === choices[3]){
        //Creates new prompt for adding new department
        const answer = await inquirer.prompt([
            {
                type: 'input',
                message: "What is the departments name?",
                name: "department"
            }
        ])
        //Shows table afterwards
        db.query(`INSERT INTO department(name) VALUES('${answer.department}')`, function (err, results){
            db.query('SELECT * FROM company_db.department;', function (err, results){
                console.table('\n','Updated Departments', results, '\n')
                init();
            });
        })
    }
}

init()
