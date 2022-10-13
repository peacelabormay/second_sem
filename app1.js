const http = require('http');
const fs = require("fs");

http.createServer( (request, response) => {
    fs.readFile("index.html", (error, data) => {
        if (error) {
            console.log(error);
            response.statusCode = 500;
            response.end();
        }
        else {
            response.write(data);
            let [num1, num2] = request.url.split(/num1=|&num2=/);
            console.log(num1, ' ', num2);
            response.end();
        }
    })
})
.listen(5500, () => console.log("Сервер запущен по адресу http://localhost:5500"));