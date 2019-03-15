const express = require('express');

const app = express();
const port = 3300;

app.use(express.static('www'))

app.get('/', express.static('www'));

app.listen(port);

console.log('Serving static on Port ' + port)
