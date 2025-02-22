const express = require('express');

const app = express();
app.use('/users', (req, res, next) => {
    console.log("This is the users middleware");
    res.send("This is the users middleware");
});
app.use('/', (req, res, next) => {
    console.log("This is the default middleware");
    res.send("This is the default middleware");
});

app.listen(3000);