const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use('/users', (req, res, next) => {
    res.send('<h1>Users</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Home</h1>');
});

app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found!</h1>'));
});

app.listen(9001);
