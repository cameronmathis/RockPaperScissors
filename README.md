# RockPaperScissors
This is a Web Application that allows users to play Rock Paper Scissors.

## Table of contents
* [General info](#general-info)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Software details](#Software-details)
* [Contact](#contact)

## General info
This is a project I decided I wanted to do in order to familiarize myself with Web Applications.

## Setup
In order to play visit [this think](http://18.216.34.190/).

## Features
Implemented:
* HTML
* CSS
* JavaScript
* Put App on Amazon Web Servcies

To-do list:
* Implement multiplayer feature

## Status
Project is: in progress

## Software details
The HTTP server is created using Express in Node.js in the server.js file. The following commands are used to create a docker image and spin up a container running the app:
>docker build -t rock-paper-scissors . <br/>
>docker run -it -p 8080:8080 rock-paper-scissors

The files used on the client side are index.html, styles.css, and app.js. 

## Contact
Created by [@cameronmathis](https://github.com/cameronmathis/) - feel free to contact me!