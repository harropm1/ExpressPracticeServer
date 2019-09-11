// nodemon server.js
const http = require('http');
let fs = require("fs");
const express = require('express');
const hbs = require('hbs');

// include routes
const teams = require('./routes/teams');
const leagues = require('./routes/leagues');

var app = express();

// register hbs partials
hbs.registerPartials(__dirname + '/views/partials');
// set view engine
app.set('view engine', 'hbs');

// partials
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

// Middleware
app.use(express.static(__dirname + '/public'));

// use routes
app.use('/teams', teams);
app.use('/leagues', leagues);

app.get('/', (request, response) => {
    response.render('index.hbs', {pageTitle: 'Home'});
});

app.get('/home', (request, response) => {
    response.render('index.hbs', {pageTitle: 'Home'});
});

// Error-handling middleware 
// Handle http 404 response
app.use((request, response, next) => {
    response.status(404).redirect('/404.html');
});

const port = 3000;
const server = http.createServer(app).listen(port);

server.on('listening', () => {
	console.log(`Server Listening on ${server.address().port}`);
});