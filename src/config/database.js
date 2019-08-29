const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: '5533',
  database: 'crud',
});

connection.query(`CREATE TABLE IF NOT EXISTS users(id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50))`, err => {
  if(err){
    console.log( err );
  }
});

module.exports = connection;