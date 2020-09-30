// include required modules
const express = require('express');
const fs = require('fs');

// server details
const app = express()
const HOSTNAME = "18.216.34.190";
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running.`);
});
app.use(express.static('pages'));

// read html file
var gamePageHTMLFile;
fs.readFile('./pages/game_page/game.html', function (err, data) {
    if (err) {
        throw err;
    }
    gamePageHTMLFile = data;
});
// load html file
app.get('/', (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.status(200).write(gamePageHTMLFile)
    res.end();
})
