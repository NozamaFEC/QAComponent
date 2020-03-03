const mysql = require('mysql');
const { DB_CONFIG } = require('./config');

const connection = mysql.createConnection(DB_CONFIG);

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (error, results) => {
  if (error) throw error;
  // eslint-disable-next-line no-console
  console.log('The solution is: ', results[0].solution);
});

module.exports = connection;
