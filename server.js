//Import express, mysql2, inquirer, and index
const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();
const inquirer = require('inquirer');
const cTable = require('console.table')
//const query = require('./lib/queries')
const db = require('./config/connection')

//select port to listen on
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


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
        db.query('SELECT * FROM company_db.department;', function (err, results) {
            console.table('\n','Departments', results, '\n')
            init();
        });
    }
    //Shows Roles table
    if(answer.action === choices[1]){
        db.query(`SELECT  id, title, (salary*38)*52 AS 'Salary', department_id AS 'Department Id' FROM company_db.role;`, function (err, results){
            console.table('\n','Roles', results, '\n')
            init();
        });
    }
    //Shows Employees table
    if(answer.action === choices[2]){
        db.query(`SELECT id, first_name AS 'First Name', last_name AS 'Last Name', role_id AS 'Role Id', manager_id AS 'Manager Id' FROM company_db.employee;`, function (err, results){
            console.table('\n','Employees', results, '\n')
            init();
        });
    }
    //Adds a new Department
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
    //Adds a role and links a department to the role
    if(answer.action === choices[4]){
        db.query('SELECT name FROM company_db.department;', async function(err, results){
            const departmentNames = results
            //asks roles name and which department it belongs too
            const answer = await inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the roles name?',
                    name: 'role'
                },
                {
                    type: 'number',
                    message: 'What is the salary per hour to nearest 2 decimals?',
                    name: 'salary'
                },
                {
                    type: 'list',
                    message: 'What department is this role apart of?',
                    choices: departmentNames,
                    name: 'departmentList'
                }
            ])
            //uses the selections to create the object and show the table
            db.query(`SELECT id FROM company_db.department WHERE name='${answer.departmentList}';`,async function (err, results){
                const id = results
                const title = answer.role
                const salary = answer.salary
                
                db.query(`INSERT INTO role(title, salary, department_id) VALUES('${title}',${salary},${await id[0].id});`, function (err, results){
                    if(err){
                        console.log(err)
                    }else{
                        db.query('SELECT * FROM company_db.role;', function (err, results){
                            console.table('\n','Updated Roles', results, '\n')
                            init();
                        })
                    }
                })
            });   
        })
    }
    if(answer.action === choices[5]){
        //selects the last name of employees in db
        db.query(`SELECT last_name AS name FROM company_db.employee`, function (err, results) {
            const employeeList = results

            //selects titles from role with no doubles
            db.query('SELECT DISTINCT title AS name FROM company_db.role;', async function(err, results){
                const roleNames = results
                //prompts the user
                const answer = await inquirer.prompt([
                    {
                        type: 'input',
                        message: 'What is the employees FIRST name?',
                        name: 'fname'
                    },
                    {
                        type: 'input',
                        message: 'What is the Employees LAST name?',
                        name: 'lname'
                    },
                    {
                        type: 'list',
                        message: 'What is the role of this employee?',
                        choices: roleNames,
                        name: 'roleList'
                    },
                    {
                        type: 'list',
                        message: 'Who is managing the employee?',
                        choices: [...employeeList, 'None'],
                        name: 'manager'
                    }
                ])
                const fname = answer.fname.trim()
                const lname = answer.lname.trim()
                let managerId = answer.manager
                if(managerId === 'None'){
                    managerId = null
                }

                //gets the id from role using user selection
                db.query(`SELECT id FROM company_db.role WHERE title="${answer.roleList}";`, async function (err, results){
                    const employeeId = await results[0].id;
                    if(err){
                        console.log(err)
                    }else{
                        if(managerId){
                            console.log(managerId)
                            //selects id from employee from users manager selection
                            db.query(`SELECT id FROM company_db.employee WHERE last_name='${managerId}';`, async function (err, result){
                                const manager = results[0].id;
                                db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('${fname}','${lname}',${employeeId}, ${await manager});`, function (err, results){
                                    if(err){
                                        console.log(err)
                                    }else{
                                        db.query('SELECT * FROM company_db.employee;', function (err, results){
                                            console.table('\n','Updated Employees', results, '\n')
                                            init();
                                        })
                                    }
                                    
                                })
                            })
                        }else{
                            //if user doesn't have a manager this does this instead
                            console.log(managerId)
                            db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('${fname}','${lname}',${await employeeId}, ${managerId});`, function (err, results){
                                db.query('SELECT * FROM company_db.employee;', function (err, results){
                                    console.table('\n','Updated Employees', results, '\n')
                                    init();
                                })
                            })
                        }
                    }
                })
            })
        }) 
    }
    if(answer.action === choices[6] ){
        db.query('SELECT first_name, last_name FROM company_db.employee;', async function (err, results){
            const employeeObject = results
            const employeeArr = []
            for(let i = 0; i < results.length; i++){
                employeeArr.push(`${await results[i].first_name} ${await results[i].last_name}`)
            }

            db.query('SELECT title AS name FROM company_db.role;', async function (err, results){
                console.log(results)
                const role = results

                const answer = await inquirer.prompt([
                    {
                        type: 'list',
                        message: 'Which Employees role needs to be updates?',
                        choices: employeeArr,
                        name: 'employee'
                    },
                    {
                        type: 'list',
                        message: 'What is their new role?',
                        choices: role,
                        name: 'role'
                    }
                ])
                db.query(`SELECT id FROM company_db.role WHERE title='${answer.role}';`, async function (err, results){
                    
                    const roleId = results[0].id

                    for(let i = 0; i < employeeArr.length; i++){
                        if(answer.employee === employeeArr[i]){
                            db.query(`UPDATE company_db.employee SET role_id=${await roleId} WHERE first_name='${employeeObject[i].first_name}' AND last_name='${employeeObject[i].last_name}';`, function (err, restult){
                                db.query('SELECT * FROM company_db.employee;', function (err, results){
                                    console.table('\n','Updated Employees', results, '\n')
                                    init();
                                })
                            })
                        }
                    }
                })

            })
        })
    }
}

init()
