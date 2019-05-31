var express = require("express");
var app = express();
var path = require("path");

var friendsList = require ("../data/friends");


module.exports = function (app) {

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.get("/api/friends", function (req, res) {
        res.json(friendsList);
    });
    //Add newFriend to array in other js
    app.post("/api/friends", function (req, res) {
        var bestFriend = {
            name: "",
            photo: "",
            responses: Infinity
        }
        var newFriend = req.body
        var friendResponse= req.body.responses;
        friendsList.push(newFriend)
        var compVar;
        for (var i = 0; i<friendsList.length; i++) {
            var listA = friendsList[i].responses;
            var listB = friendResponse;
            compVar = 0;
            var compResult = Math.abs(parseInt(listB)-parseInt(listA[i]));
        }
        var compVariant = []
        compVariant.push(compResult)
        let y = compVariant.indexOf(Math.min(compVariant));
        x = y
        bestFriend = friendsList[x]
        res.json(bestFriend)
    });
};