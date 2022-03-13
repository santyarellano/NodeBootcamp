
const { response } = require('express');
const express = require('express');
const Datastore = require('nedb');
const app = express();

// DB
const db = new Datastore('database.db');
db.loadDatabase();

// Start server
app.listen(3000, () => console.log('Server is running on port 3000'));
app.use(express.static('public')); // uses public folder for front
app.use(express.json({limit: '1mb'}));

// Manage POST request (upload tasks)
app.post('/api', (req, resp) => {
    //console.log(req.body);

    db.insert(req.body);

    resp.json({
        status: 'success',
        data: req.body
    });
});

// Manage GET request (get tasks)
app.get('/api', (req, resp) => {
    db.find({}, (err, data) => {
        resp.json(data);
    });
});