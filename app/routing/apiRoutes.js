var friendsList = require("../data/friends");


module.exports = function (app) {

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
        var friendResponse = req.body.responses;
        
        var compVariant = []
        var a = 0;
        for (var i = 0; i < friendsList.length; i++) {
            var listA = friendsList[i].responses;
            var listB = friendResponse;
            for (var j = 0; j <listB.length; j++){
                 a += Math.abs(parseInt(listB[j]) - parseInt(listA[j]));
            }
            compVariant.push(a)
            a = 0;
        }
        console.log(compVariant)
        
        var z = Math.min(...compVariant)
        let y = compVariant.indexOf(z);
        console.log(y)
        friendsList.push(newFriend)
        bestFriend = friendsList[y]
        res.json(bestFriend)
    });
};