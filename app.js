const express = require("express");
const app = express();
// const controller = require("./controllers/controller.js");
const router = require("../Web-calculator/routers/router");
const jsonParser = express.json();

app.post("/side", jsonParser, router);
app.get("/", router);

app.use(function (req, res, next) {
    res.status(404).send("Not Found");
});

app.listen(3000, () => console.log("Server is working on port: 3000"));
