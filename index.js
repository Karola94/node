var http = require('http');
var fs = require('fs');

var server = http.createServer();

// server.on('request', function(request, response) {
//     response.write('Hello world!');
//     response.end();
// });
// server.listen(9000);

// fs.readFile('./index.html', 'utf-8', function(err, data) {
//     console.log('Odczyt pliku html.');
//     console.log(data);
// });

server.on('request', function (request, response) {
    if (request.method === 'GET' && request.url === '/index.html') {
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            console.log(data);
            response.write(data);
            response.end();
        });
    } else if (request.method === 'GET' && request.url === '/404error.jpeg') {
        response.setHeader("Content-Type", "image/jpeg");
        fs.readFile('./404error.jpeg', function(err, data) {
            console.log(data);
            response.write(data);
            response.end();
        });
    } else if (request.method === 'GET' && request.url === '/worked.jpg') {
        response.setHeader("Content-Type", "image/jpeg");
        fs.readFile('./worked.jpg', function(err, data) {
            console.log(data);
            response.write(data);
            response.end();
        });
    } else {
        // fs.readFile('./index.html', 'utf-8', function(err, data) {
            response.setHeader("Content-Type", "text/html; charset=utf-8");
            response.write('<img src="404error.jpeg" alt="Not found"/>');
            response.end();
        // });
    }
});

server.listen(9000);
