const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: process.env.DB_USER,
        // MySQL password
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    (err) => {
        console.log(err)
    }
    //console.log(`Connected to the company_db database.`)
);

module.exports = db