const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>This is the front page!!</h1>');
});

module.exports = router;