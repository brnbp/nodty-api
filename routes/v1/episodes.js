const express = require('express');
const router = express.Router();

router.get('/feed/:feedId', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/latests', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
