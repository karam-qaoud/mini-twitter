const mysql = require("mysql");
const dotenv = require("dotenv");
const result = dotenv.config();
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log("Error in database connection", err);
  } else {
    console.log("MySQL Database Connected!");
  }
});

let saveToMysql = (tweet) => {
  let sql = `INSERT INTO tweets (Tweet) VALUES ("${tweet}")`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
};

const retrieveTweets = new Promise((resolve, reject) => {
  let retrievedTweets = [];
  let sql = `SELECT * FROM tweets;`;
  db.query(sql, function (err, result) {
    if (err) {
      throw err;
    } else {
      const parsed = Object.values(JSON.parse(JSON.stringify(result)));
      parsed.forEach((v) => retrievedTweets.push(v.Tweet));
      if(retrievedTweets != undefined)
      resolve(retrievedTweets);
    }
  });
});


// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     db.query("CREATE DATABASE nodemysql", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });

exports.saveToMysql = saveToMysql;
exports.retrieveTweets = retrieveTweets;