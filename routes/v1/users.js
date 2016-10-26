const express = require('express');
const router = express.Router();

router.get('/find/:term', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/:username', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.delete('/:username', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/authenticate', function(req, res, next) {
    res.send('respond with a resource');
});

router.patch('/:username/touch', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/:username/feeds', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/:username/feeds/:feedId', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/:username/feeds/:feedId', function(req, res, next) {
    res.send('respond with a resource');
});

router.delete('/:username/feeds/:feedId', function(req, res, next) {
    res.send('respond with a resource');
});

router.put('/:username/feeds/:feedId/listenAll', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/:username/episodes/feed/:feedId', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/:username/episodes', function(req, res, next) {
    res.send('respond with a resource');
});

router.delete('/:username/episodes/:episodeId', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/:username/episodes/latests', function(req, res, next) {
    res.send('respond with a resource');
});

router.put('/:username/episodes/:episodeId/paused', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/:username/friends', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/:username/friends/:friend', function(req, res, next) {
    res.send('respond with a resource');
});

router.delete('/:username/friends/:friend', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
