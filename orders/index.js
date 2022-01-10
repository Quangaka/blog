const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const orders = {};

app.get('/orders', (req, res) => {
  res.send(orders);
});

app.post('/orders', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const idAccount = req.body.idAccount;
  const totalMoney = req.body.totalMoney;
  const date = req.body.date;
  const idStaff = req.body.idStaff;
  const idService = req.body.idService;

  orders[id] = {
    id,
    idAccount,
    totalMoney,
    date,
    idStaff,
    idService
  };

  await axios.post('http://localhost:4005/events', {
    type: 'OrderCreated',
    data: {
      id,
      idAccount,
      totalMoney,
      date,
      idStaff,
      idService
      }
  });

  res.status(201).send(orders[id]);
});

app.post('/events', (req, res) => {
  console.log('Received Event', req.body.type);

  res.send({});
});

app.listen(4007, () => {
  console.log('Listening on 4007');
});
