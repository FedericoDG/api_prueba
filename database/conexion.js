const mysql = require('mysql');

const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'api_prueba'
});

module.exports = DB;