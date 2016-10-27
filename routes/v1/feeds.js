const express = require('express');
const router = express.Router();

router.get('/latests', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/top/:count?', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/name/:name', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/:id/episodes', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
