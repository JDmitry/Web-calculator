exports.index = function (request, response) {
    response.sendFile(process.cwd() + "/index.html");
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
            request.body.num1 = Math.round((request.body.num1 * request.body.num2) * 100) / 100;
            break;
        case "/":
            try {

                request.body.num1 = +(request.body.num1 / request.body.num2).toFixed(10);
                break;
            } catch(err) {

                console.log(err);
            }
    }
    
   response.json(request.body.num1);
}