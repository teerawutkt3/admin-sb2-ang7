var express = require('express');
var router = express.Router();

// ## Blog
var con = require('../connection');

// Get
router.get('/', (req, res) => {
    var sql = "SELECT * FROM blog";
    con.query(sql, function (err, result) {
        var tmp = JSON.stringify(result);
        res.send(tmp);
        console.log("Get blog");
    });
})

// Get:id
router.get('/:id', (req, res) => {
    var id = req.params.id;
    var sql = `SELECT * FROM blog where id = ${id}`;

    con.query(sql, function (err, result) {
        var tmp = JSON.stringify(result);
        res.send(tmp);
        console.log(`Get blog by id : ${id}`);
    });
})

// Post
router.post('/', (req, res, next) => {
    console.info('blog post ==> ', req.body)
    var created_at = new Date()
    var sql = `INSERT INTO BLOG (title, description, created_at) VALUES ('${req.body.title}', '${req.body.description}', ${con.escape(created_at)})`;
    console.log(sql);
    con.query(sql, (err, result) => {
        if (err) {
            console.log("blog cannot insert");
        } else {
            console.log('blog inserted');
        }
    });
    res.json(req.body)
})

// Delete :id
router.delete('/:id', (req, res) => {
    var id = req.params.id;
    var sql = `DELETE  FROM blog where id = ${id}`;

    con.query(sql, function (err, result) {
        console.log(`Delete blog by id : ${id}`);
    });
    res.json(`Delete blog by id : ${id}`)
})

// Update :id
router.put('/', (req, res) => {
    var id = req.body.id;
    var title = req.body.title;
    var description = req.body.description;
    var update_at = new Date();
    var sql = `UPDATE blog SET title='${title}', description='${description}', updated_at=${con.escape(update_at)} where id = ${id}`;


    con.query(sql, function (err, result) {
        console.log(`Update blog by id : ${id}`);
    });
    res.json(`Update blog by id : ${id}`)
})

module.exports = router;
