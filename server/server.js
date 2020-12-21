const express = require("express");
const app = express();
const port = 3000;
const db = require('../database/database')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/makeTweet', (req, res)=> {
    res.send("Tweet Recieved at server side!");
    console.log(req.body);
    db.saveTweet(req.body.Tweet);
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  })