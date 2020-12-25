const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true})


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("\nDatabase connected!")
  // we're connected!
});


const tweetsSchema = new mongoose.Schema({
    tweet: String
});

const Tweets = mongoose.model('Tweets', tweetsSchema);

let saveTweet = tweet => {
    let newone = new Tweets({tweet: tweet});
    newone.save((err, success)=> {
        if (err) return console.log(err);
    });
};

exports.saveTweet = saveTweet;