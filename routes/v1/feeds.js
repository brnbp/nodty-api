const express = require('express');
const router = express.Router();
const FeedsModel = require('../../models/feeds')
const ControllerFeed = require('../../controllers/feeds')
const FeedsController = new ControllerFeed(FeedsModel)

router.get('/latests', function(req, res, next) {
    res.send(FeedsController.latests());
});

router.get('/top/:count?', function(req, res, next) {
    res.send(FeedsController.top(req.params.count));
});

router.get('/name/:name', function(req, res, next) {
    res.send(FeedsController.getByName(req.params.name));
});

router.get('/:id', function(req, res, next) {
    res.send(FeedsController.getById(req.params.id));
});

router.get('/:id/episodes', function(req, res, next) {
    res.send(FeedsController.episodes(req.params.id));
});

module.exports = router;
