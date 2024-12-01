const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "limoni",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = db.promise();