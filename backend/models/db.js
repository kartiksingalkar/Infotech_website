var mysql = require('mysql2');

var con = mysql.createPool({
    host: process.env.SERVER,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}).promise()

module.exports = { con }