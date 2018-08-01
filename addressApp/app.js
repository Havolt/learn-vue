const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = 3000;

app.use(express.static(path.join(__dirname + 'public')));

const indexView = require("/routes/index.js");

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});

app.use('/', indexView);
