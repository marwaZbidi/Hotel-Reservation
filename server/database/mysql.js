const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '07438283',
  database : 'hotel'
});

connection.connect(function(err) {
  if (err) throw err
  console.log("Connected!");
});

module.exports = connection;