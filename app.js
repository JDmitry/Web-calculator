const express = require("express");

const app = express();
const jsonParser = express.json();

app.post("/side",  jsonParser, function(request, response) {
    
    if(!request.body) return response.sendStatus(400);

    switch(request.body.s) {
        case "+":
            request.body.num1 = (+request.body.num1) + (+request.body.num2);
            break;
        case "-":
            request.body.num1 = request.body.num1 - request.body.num2;
            break;
        case "*":
            request.body.num1 = request.body.num1 * request.body.num2;
            break;
        case "/":
            if (request.body.num2 === '0') {
                request.body.num1 = 'Error';
                return;
            }
            request.body.num1 = request.body.num1 / request.body.num2;
            break;
    }
    
    response.json(request.body.num1);
});

app.get("/", function(request, response) {

    response.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => console.log("Server is working"));
