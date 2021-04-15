const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

const postRoute = require('./routes/posts');

app.use('/posts', postRoute);

app.get('/', (req, res) => {
    res.send("We are home");
})

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected")});

const port = process.env.PORT || 5000;
app.listen(port);
