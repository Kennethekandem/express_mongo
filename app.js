const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

// post route
const postRoute = require('./routes/posts');
app.use('/posts', postRoute);

// Home route
app.get('/', (req, res) => {
    res.send("We are home");
})

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected");
});

const port = process.env.PORT || 5000;
app.listen(port);
