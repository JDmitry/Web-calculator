const express = require("express");
const app = express();
const router = require(__dirname + "/routers/router");
const jsonParser = express.json();

app.post("/site", jsonParser, router);
app.get("/", router);
app.use(express.static(__dirname + '/public'));

app.use(function (request, response, next) {
    response.status(404).send("Not Found");
});

app.listen(3000, "127.0.0.1", function() {
    console.log("Server is running on http//127.0.0.1:3000")
});
