const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(`Request method: ${req.method}`);
    next();
});
app.use((req, res, next) => {
    console.log(`Request method: ${req.method}`);
});

const server = http.createServer(app);
server.listen(9001);