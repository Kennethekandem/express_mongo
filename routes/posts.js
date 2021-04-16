const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('Hello world!');
});

// Create post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const createPost = await post.save();
        res.json({msg: 'Post created', createPost});
    }catch (error) {
        res.status(400).json({ msg: 'Post not created', error });
    }
});

module.exports = router;
