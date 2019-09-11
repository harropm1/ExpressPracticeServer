const express = require('express');
const fs = require('fs');
const leagueRouter = express.Router();

leagueRouter.get('/', function(request, response) 
{
    response.end(fs.readFileSync(`./data/leagues.json`)); 
});

module.exports = leagueRouter;