const http = require('http');
const fs = require("fs");
const url = require('url');
const querystring = require('querystring');

const port = 3000;

const server = http.createServer(async (request, response) => {
  try {
    /*
    let params = new URLSearchParams(request.url);
    console.log((params.get('num2')));*/
    
    let rawUrl = 'https://stackabuse.com/?page=2&limit=3'; 
    let parsedUrl = url.parse(rawUrl);
    let [num11, num22] = querystring.parse(parsedUrl.query);
    console.log(num11, num22);
    

    let [oki, num1, num2] = request.url.split(/num1=|&num2=/);

    if (oki == '/?') {

      response.writeHead(200, { 'Content-Type': 'application/json' });

      let json = {
        name: 'Diana',
        number1: Number(num1),
        number2: Number(num2),
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

});

server.listen(port, () => console.log(`Сервер запущен на порту ${port}`));
//responce.statusCode = 400 ставить


/*
const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
res.statusCode = 200
res.setHeader('Content-Type', 'text/plain')
res.end('Hello World\n')
})
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`)
})*/