const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('Hello world!');
});

// Create post
router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(400).json({msg: 'Error posting', error});
        })
});

module.exports = router;
