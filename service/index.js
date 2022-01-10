const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const serivces = [];

app.get('/service', (req, res) => {
    res.send(serivces)
})

app.post('/service', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const name = req.body.name;
    const price = req.body.price;
    const descripstion = req.body.descripstion;

    serivces[id] = { id, name, price, descripstion };

    await axios.post('http://localhost:4005/events', {
    type: 'ServiceCreated',
    data: {
      id,
      name,
      price,
      descripstion
      }
  });

    res.status(201).send(serivces[id]);
})

app.post('/events', (req, res) => {
    console.log('Received Event', req.body.type);
  
    res.send({});
  });

app.listen(4009, () => {
    console.log('Listening on 4009');
})