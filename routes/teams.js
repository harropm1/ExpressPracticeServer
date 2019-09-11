const express = require('express');
const fs = require('fs');
const teamRouter = express.Router();

teamRouter.get('/', function(request, response) 
{
    response.end(fs.readFileSync(`./data/teams.json`)); 
});

module.exports = teamRouter;