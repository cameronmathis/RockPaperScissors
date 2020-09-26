// include required modules
const http = require('http')
const express = require('express')
const fs = require('fs');

// server details
const app = express()
const HOSTNAME = "198.168.86.17";
const PORT = 3001;
const server = app.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME} on port ${PORT}.`);
});
app.use(express.static('public'));

var htmlFile;
var cssFile;

fs.readFile('./public/css/index.html', function (err, data) {
    if (err) {
        throw err;
    }
    htmlFile = data;
});

fs.readFile('./public/css/styles.css', function (err, data) {
    if (err) {
        throw err;
    }
    cssFile = data;
});

app.get('/', (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.status(200).write(htmlFile)
    res.end();
})