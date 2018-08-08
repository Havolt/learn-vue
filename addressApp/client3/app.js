const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const vue = require('vue');

const indexR = require('./routes/indexR.js');

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get('/', indexR);