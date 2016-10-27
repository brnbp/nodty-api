const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/failed', function(req, res, next) {
    res.send('respond with a resource');
});

router.delete('/:id', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
