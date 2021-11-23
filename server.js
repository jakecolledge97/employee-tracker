//Import express
const express = require('express');
//Import mysql2
const mysql = require('mysql2');
//Import enquire
const enquire = require('enquire');

const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'rootroot',
        database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
);