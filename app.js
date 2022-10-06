const express = require("express");
const app = express();
const router = require("../Web-calculator/routers/router");
const jsonParser = express.json();

app.post("/site", jsonParser, router);
app.get("/", router);

app.use(function (request, response, next) {
    response.status(404).send("Not Found");
});

app.listen(3000, () => console.log("Server is working on port: 3000"));
