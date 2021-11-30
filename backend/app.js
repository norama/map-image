import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

import config from './config.js';

var db = mysql.createConnection({
    host: 'localhost',
    user: 'guest',
    password: 'guest',
    database: 'geodb'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('mysql connected');
});

const app = express();
app.use(cors());
app.options('*', cors());
app.use(express.json());

app.post('/add', (req, res) => {
    console.log('body', req.body);
    const sql =
        "INSERT INTO markers (emotion, comment, location) VALUES (false, 'xxx', ST_GeomFromText('POINT(2.3 3.4)'));";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send({ info: 'Row added to DB' });
    });
});

/*
app.get('/addme', (req, res) => {
    const marker = {
        emotion: true,
        comment: 'ccc',
        location: "ST_GeomFromText('POINT(4 5)')"
    };
    const sql = 'INSERT INTO markers SET ?';
    db.query(sql, marker, (err, result) => {
        if (err) throw err;
        res.send('Marker added to DB');
    });
});
*/

app.get('/list', (req, res) => {
    const sql = 'SELECT * FROM markers;';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.get('/marker/:id', (req, res) => {
    const sql = `SELECT * FROM markers WHERE id = ${req.params.id};`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`);
});
