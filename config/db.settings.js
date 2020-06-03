const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host: '167.114.2.96', // MYSQL HOST NAME
    user: 'helangu_user', // MYSQL USERNAME
    password: 'h3FQRSp0', // MYSQL PASSWORD
    database: 'helangu_app' // MYSQL DB NAME
}).promise();
module.exports = dbConnection;