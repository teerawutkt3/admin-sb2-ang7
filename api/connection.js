
var bodyParser = require('body-parser');
var mysql = require("mysql");

// ##### connect mysql
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blog"
});

module.exports = con;