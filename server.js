// include required modules
const express = require('express');
const fs = require('fs');

// server details
const app = express()
const HOSTNAME = "198.168.86.17";
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME} on port ${PORT}.`);
});
app.use(express.static('public'));

// read html file
var htmlFile;
fs.readFile('./public/index.html', function (err, data) {
    if (err) {
        throw err;
    }
    htmlFile = data;
});
// load html file
app.get('/', (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.status(200).write(htmlFile)
    res.end();
})