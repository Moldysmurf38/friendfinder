var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(port, function () {
  console.log("app listening...");
});