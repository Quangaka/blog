const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const staffs = {};

app.get('/staffs', (req, res) => {
    res.send(staffs)
})

app.post('/staffs', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const name = req.body.name;
  const address = req.body.address;
  const phone = req.body.phone;
  const idCard = req.body.idCard;
  const username = req.body.username;
  const password = req.body.password;

  staffs[id] = {
    id,
    name,
    address,
    phone,
    username,
    password,
    idCard
  };

  await axios.post('http://localhost:4005/events', {
    type: 'StaffCreated',
    data: {
      id,
      name,
      address,
      phone,
      username,
      password,
      idCard
      }
  });

    res.status(201).send(staffs[id]);
})

app.post('/events', (req, res) => {
  console.log('Received Event', req.body.type);

  res.send({});
});

app.listen(4008, () => {
    console.log('Listening on 4008');
})