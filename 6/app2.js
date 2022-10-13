const http = require("http");
const fs = require("fs");

const port = 5500;

http.createServer(async (request, response) => {

    try {
        let [oki, num1, num2] = request.url.split(/num1=|&num2=/);
        //console.log(num1);
        //console.log(num2);
        if (oki == '/?') {
            //console.log(Number(num1) + Number(num2));
            response.writeHead(200, { 'Content-Type': 'application/json' });
            let json = {
                name: 'Diana',
                n1: num1,
                n2: num2,
                sum: Number(num1) + Number(num2),
                min: Number(num1) - Number(num2),
                mul: Number(num1) * Number(num2),
                div: Number(num1) / Number(num2)
            };
            response.end(JSON.stringify(json));
        }
        else {
            fs.readFile("index.html", (error, data) => response.end(data));
        }
    }
    catch {
        response.writeHead(400, { 'Content-Type': 'application/json' });
        let json = {
            name: 'Diana',
            desc: "Error 400"
        };
        response.end(JSON.stringify(json));
    }


}).listen(port, () => console.log(`Сервер запущен на порту ${port}`));