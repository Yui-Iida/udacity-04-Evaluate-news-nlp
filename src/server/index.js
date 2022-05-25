let path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js');
const fetch = require('node-fetch');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log(__dirname);
console.log(dotenv);

// call API
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?';
const apiKey = process.env.API_KEY;
// let textapi = new meaningcloud({
//   application_key: process.env.API_KEY,
// });
console.log(`Your API key is ${process.env.API_KEY}`);

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});