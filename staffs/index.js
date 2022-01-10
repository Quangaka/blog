const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const staffs = [];

app.get('/services', (req, res) => {
    res.send(staffs)
})

app.post('/services', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const name = req.body;

    serivces.push({ id, name })

    res.status(200).send(staffs[id]);
})

app.listen(4007, () => {
    console.log('Listening on 4007');
})