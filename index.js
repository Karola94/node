var fs = require('fs');
var colors = require('colors');
// var StatMode = require('stat-mode');

// fs.stat('./cat.jpg', function(err, stats) {
//     var statMode = new StatMode(stats);
//     console.log(statMode.toString());
// });

fs.readdir('.', 'utf-8', function(err, data) {
    if(err) throw err;
    console.log('Odczyt obecnego katalogu.'.yellow);
    fs.writeFile('./tekst.txt', data, function(err) {
        if(err) throw err;
        console.log('Zapisano!'.green);
    });
}); 
// fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//     console.log('Dane przed zapisem!'.blue);
//     console.log(data);
//     fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
//         if(err) throw err;
//         console.log('Zapisano!'.blue);
//         fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//             console.log('Dane po zapisie'.blue);
//             console.log(data);
//         });
//     });
// });
