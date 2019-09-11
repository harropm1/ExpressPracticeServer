"use strict";

$(function ()
{
    $("#teams").on("click", function ()
    {
        $.getJSON('http://localhost:3000/teams', function ()
        { })
            .done(function (data)
            {
                $("#msgDiv").empty();
                for (let i = 0; i < data.length; i ++)
                {
                    $("#msgDiv").append($("<li>", {text: data[i].TeamName}));
                }
            })
            .fail(function ()
            {
                console.log('Error connecting to Server.');
            });
    });
    $("#leagues").on("click", function ()
    {
        let data;
        $.getJSON('http://localhost:3000/leagues', function ()
        { })
            .done(function (data)
            {
                $("#msgDiv").empty();
                for (let i = 0; i < data.length; i ++)
                {
                    $("#msgDiv").append($("<li>", {text: data[i].Name}));
                }
            })
            .fail(function ()
            {
                console.log('Error connecting to Server.');
            });
    });
});