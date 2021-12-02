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
app.use(express.json({ limit: '50mb' }));

app.post('/add', (req, res) => {
    const { latlng, content } = req.body;
    const sql = `INSERT INTO markers (emotion, comment, image, location) VALUES (${
        content.emotion
    }, '${content.comment}', ${
        content.image ? `'${content.image}'` : null
    }, ST_GeomFromText('POINT(${latlng.lat} ${latlng.lng})'));`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        const id = result.insertId;
        getMarker(id, res);
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
        res.send(result.map((record) => marker(record)));
    });
});

app.get('/marker/:id', (req, res) => {
    const id = req.params.id;
    getMarker(id, res);
});

const getMarker = (id, res) => {
    const sql = `SELECT id, comment, emotion, location FROM markers WHERE id = ${id};`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length === 0) {
            throw `No marker with id:  ${id}`;
        }
        res.send(marker(result[0]));
    });
};

app.get('/marker/full/:id', (req, res) => {
    const id = req.params.id;
    getMarkerWithImage(id, res);
});

const getMarkerWithImage = (id, res) => {
    const sql = `SELECT id, comment, emotion, location, image FROM markers WHERE id = ${id};`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length === 0) {
            throw `No marker with id:  ${id}`;
        }
        res.send(marker(result[0]));
    });
};

const marker = (result) => {
    const { id, comment, emotion, location, image } = result;
    return {
        id,
        latlng: { lat: location.x, lng: location.y },
        content: { comment, emotion: !!emotion, image: image ?? undefined }
    };
};

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`);
});
