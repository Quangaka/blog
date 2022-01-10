const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const customers = {};

app.get('/customers', (req, res) => {
  res.send(customers);
});

app.post('/customers', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const nameCustomer = req.body.nameCustomer;
  const address = req.body.address;
  const phone = req.body.phone;
  const idCard = req.body.idCard;
  const username = req.body.username;
  const password = req.body.password;

  customers[id] = {
    id,
    nameCustomer,
    address,
    phone,
    username,
    password,
    idCard
  };

  await axios.post('http://localhost:4005/events', {
    type: 'CustomerCreated',
    data: {
      id,
      nameCustomer,
      address,
      phone,
      username,
      password,
      idCard
      }
  });

  res.status(201).send(customers[id]);
});

app.post('/events', (req, res) => {
  console.log('Received Event', req.body.type);

  res.send({});
});

app.listen(4006, () => {
  console.log('Listening on 4006');
});
