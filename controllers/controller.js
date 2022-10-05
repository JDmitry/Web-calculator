exports.index = function (request, response) {
    response.sendFile("/home/ds/Neoflex/Web-calculator/index.html");
    // response.sendFile(__dirname + "/index.html");
};

exports.result = function(request, response) {
    
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
            try {

                request.body.num1 = request.body.num1 / request.body.num2;
            } catch(err) {

                console.log(err);
            }
    }
    
   response.json(request.body.num1);
}