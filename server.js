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

// read htmls file
var gamePageHTMLFile;
fs.readFile('./pages/game_page/game.html', function (err, data) {
    if (err) {
        throw err;
    }
    gamePageHTMLFile = data;
});
var homePageHTMLFile;
fs.readFile('./pages/home_page/home.html', function (err, data) {
    if (err) {
        throw err;
    }
    homePageHTMLFile = data;
});

// load home page
app.get('/homepage', (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.status(200).write(homePageHTMLFile)
    res.end();
})

// load game page
app.get('/gamepage', (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.status(200).write(gamePageHTMLFile)
    res.end();
})

app.post('/gamepage', (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.status(200).write(gamePageHTMLFile)
    res.end();
})
