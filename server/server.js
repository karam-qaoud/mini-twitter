const express = require("express");
const app = express();
const port = 8080;
const db = require('../database/database');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/makeTweet', (req, res)=> {
    res.send("Tweet Recieved at server side!");
    console.log(req.body);
    db.saveToMysql(req.body.Tweet);
});

app.get('/tweet', (req, res)=> {
      db.retrieveTweets.then(value => {
        console.log('Sending tweets ...');
        res.status(200).send(value);
        console.log("sent!");
    })
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  })