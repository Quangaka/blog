const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {}
const customers = {}
const staffs = {}
const services = {}
const orders = {}

const handleEvent = (type, data) => {
    if (type === 'PostCreated') {
        const { id, title } = data;

        posts[id] = { id, title, comments: [] };
    }

    if (type === 'CommentCreated') {
        const { id, content, postId, status } = data;

        const post = posts[postId];
        post.comments.push({ id, content, status });
    }

    if (type === 'CustomerCreated') {
        const { id, nameCustomer, address, phone, username, password, idCard } = data;

        customers[id] = { id, nameCustomer, address, phone, username, password, idCard };
    }

    if (type === 'StaffCreated') {
        const { id, name, address, phone, username, password, idCard } = data;

        staffs[id] = { id, name, address, phone, username, password, idCard };
    }

    if (type === 'OrderCreated') {
        const { id, idAccount, totalMoney, date, idStaff, idService } = data;

        orders[id] = { id, idAccount, totalMoney, date, idStaff, idService };
    }

    if (type === 'ServiceCreated') {
        const { id, name, price, descripstion  } = data;

        services[id] = { id, name, price, descripstion  };
    }

    if (type === 'Comment Updated') {
        const { id, content, postId, status } = data;

        const post = posts[postId];
        const comment = post.comments.find(comment => {
            return comment.id === id;
        })
        comment.status = status;
        comment.content = content;
    }
};

app.get('/posts', (req, res) => {
    res.send(posts);
})

app.get('/customers', (req, res) => {
    res.send(customers);
})

app.get('/staffs', (req, res) => {
    res.send(staffs);
})

app.get('/services', (req, res) => {
    res.send(services);
})

app.get('/orders', (req, res) => {
    res.send(orders);
})

app.post('/events', (req, res) => {
    const {type, data} = req.body;

    handleEvent(type, data);    

    res.send({});
})

app.listen(4002, async () => {
    console.log('Listening on 4002');

    const res = await axios.get('http://localhost:4005/events');

    for (let event of res.data) {
        console.log('Processing event: ', event.type);

        handleEvent(event.type, event.data);
    }
})