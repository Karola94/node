var fs = require('fs');
var formidable = require('formidable');

exports.upload = function(req, resp) {
    console.log('Rozpoczynam obsługę żądania upload.');
    var form = new formidable.IncomingForm();
    form.parse(req, function(error, fields, files) {
        fs.renameSync(files.upload.path, 'test.png');
        resp.writeHead(200, {'Content-Type': 'text/html'});
        resp.write('received image:<br/>');
        resp.write('<img src="/show"/>');
        resp.end();
    });       
}

exports.welcome = function(req, resp) {
    console.log('Rozpoczynam obsługę żądania welcome.');
    fs.readFile('templates/start.html', function(err, html) {
        resp.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        resp.write(html);
        resp.end();
    });    
}

exports.error = function(req, resp) {
    console.log('Nie wiem co robić');
    resp.write('404 :(');
    resp.end();
}

exports.show = function(req, resp) {
    fs.readFile('test.png', 'binary', function(error, file) {
        resp.writeHead(200, {'Content-Type': 'image/png'});
        resp.write(file, 'binary');
        resp.end();
    });
}