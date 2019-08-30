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
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/index.html') {                          
        fs.readFile('./index.html', 'utf-8', function(err, data) {    
            console.log(data);
            response.write(data);  
            response.end();        
        });       
    } else {
        fs.readFile('./index.html', 'utf-8', function(err, data) { 
                   
            response.write('<img src="404error.jpeg" alt="Not found"/>');
            response.end();                   
        });   
    }
});

server.listen(9000);