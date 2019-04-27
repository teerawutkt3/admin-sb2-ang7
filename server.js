
//Install express server
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var mysql = require("mysql");
const app = express();

const pathPrefix = '/api'
// routes
var blogRouter = require('./api/blog/blog');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/sb-admin2-ang7'));


// ##### connect mysql
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blog"
});

app.use(function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.set('Access-Control-Allow-Headers', 'Origin, Accept, Content-type, X-Requested-With, X-CSRF-Token');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ==> Blog
app.use(pathPrefix + '/blog', blogRouter);

// ==> Router for build
app.get('/', function (req, res) {

    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Send the response body as "Hello World"
    res.end('Hello World\n');
    res.sendFile(path.join(__dirname + '/dist/sb-admin2-ang7/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/');