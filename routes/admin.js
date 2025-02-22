const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<body><form action="product" method="POST"><input type="text" name="title"><button type="submit">Add</button></form></body>');
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;