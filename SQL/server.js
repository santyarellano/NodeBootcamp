

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

app.post('/api', (req, resp) => {

    let sql = 'INSERT INTO tasks (id, task) VALUES (?, ?)';
    db.run(
        sql,
        [1, req.body.task_txt],
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

// select
let sql = 'select * from tasks';
db.all(
    sql, [],
    (err, rows) => {
        if (err) return console.error(err.message);

        rows.forEach((row) => {
            console.log(row);
        });
    }
);