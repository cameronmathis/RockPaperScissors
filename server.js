// include required modules
const express = require('express');
const fs = require('fs');

// server details
const app = express()
const HOSTNAME = "ec2-18-216-34-190.us-east-2.compute.amazonaws.com";
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running.`);
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
