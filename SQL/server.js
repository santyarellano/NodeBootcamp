
const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();

// DB
const db = new sqlite3.Database('mock.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.log("sql error");
        return;
    }

    console.log('conexion to db successful');
});

// Start server
app.listen(3000, () => console.log('Server is running on port 3000'));
app.use(express.static('public')); // uses public folder for front
app.use(express.json({limit: '1mb'}));

// MANAGE POST REQUESTS (SUBMIT TASKS)
app.post('/api', (req, resp) => {

    let sql = 'INSERT INTO tasks (task) VALUES (?)';
    db.run(
        sql,
        [req.body.task_txt],
        (err) => {
            if (err) return console.error(err.message);
            console.log("insert complete");
        }
    );
    
    //console.log(req.body);
    resp.json({
        status: 'success',
        data: req.body
    });
});

// MANAGE GET REQUESTS (GET TASKS)
app.get('/api', (req, resp) => {
    resp.json({
        status: 'success',
        data: selectAll().json()
    });
});

// ---------- SQL FUNCTIONS -----------
function selectAll() {
    let sql = 'select * from tasks';
    db.all(
        sql, [],
        (err, resp) => {
            if (err) return console.error(err.message);
            
            console.log(resp);
            return resp;
        }
    );
}

function dropTable() {
    let sql = 'drop table tasks';
    db.all(
        sql, [],
        (err, resp) => {
            if (err) return console.error(err.message);
    
            console.log("Table dropped");
        }
    );
}

function createTable() {
    let sql = 'create table tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT);';
    db.all(
        sql, [],
        (err, resp) => {
            if (err) return console.error(err.message);
    
            console.log("Table created");
        }
    );
}

// execute
console.log(selectAll());