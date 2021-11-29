const db = require('../config/connection');


const Query = {
    getDepartments: () => {
        db.query('SELECT * FROM company_db.department;', function (err, results) {
            console.table('\n','Departments', results, '\n')
        });
    }
}
module.exports = Query